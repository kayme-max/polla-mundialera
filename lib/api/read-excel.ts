// lib/api/read-excel.ts
import * as XLSX from "xlsx"
import path from "path"
import fs from "fs"
import type { Prediccion, Participante } from "../data/predictions"

export type SheetData = {
  participantes: Participante[]
  predicciones: Prediccion[]
}

const COLUMNAS_IGNORAR = new Set([
  "Marca temporal",
  "Email",
  "Dirección de correo electrónico",
  "Nombre Completo del Apostador (Para contacto y premios)",
  "Alias / Apodo (El que se usará en el Ranking)",
  "TOTAL ACUMULADO",
  "PUNTOS FASE DE GRUPOS",
])

const PARTIDO_REGEX = /^Partido (\d+):\s*(.+?)\s+vs\s+(.+?)\s*-\s*Predicción de Goles\s*\[(.+)\]$/

type PartidoColInfo = {
  numeroPartido: number
  esLocal: boolean
}

function parseHeaders(headers: string[]): Map<string, PartidoColInfo> {
  const map = new Map<string, PartidoColInfo>()
  const vistos = new Set<number>()

  for (const header of headers) {
    const trimmed = header.trim()
    const match = trimmed.match(PARTIDO_REGEX)
    if (!match) continue

    const numeroPartido = parseInt(match[1], 10)
    const esLocal = !vistos.has(numeroPartido)
    vistos.add(numeroPartido)

    map.set(trimmed, { numeroPartido, esLocal })
  }

  return map
}

export function readExcelLocal(filename: string): SheetData {
  const filePath = path.join(process.cwd(), "data", filename)
  const buffer = fs.readFileSync(filePath)
  const workbook = XLSX.read(buffer, { type: "buffer", cellText: true, raw: false })
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const rows = XLSX.utils.sheet_to_json<Record<string, string>>(sheet)

  if (rows.length === 0) {
    return { participantes: [], predicciones: [] }
  }

  const headers = Object.keys(rows[0])
  const partidoColMap = parseHeaders(headers)

  const participantes: Participante[] = []
  const predicciones: Prediccion[] = []

  type Acumulador = {
    golesLocal?: number
    golesVisitante?: number
  }

  for (const row of rows) {
    const email = (row["Email"] || row["Dirección de correo electrónico"])?.trim()
    if (!email) continue

    const nombreCompleto = row["Nombre Completo del Apostador (Para contacto y premios)"]?.trim()
    const alias = row["Alias / Apodo (El que se usará en el Ranking)"]?.trim()

    const nombre = nombreCompleto || email
    const aliasFinal = alias || email.split("@")[0]

    participantes.push({ nombre, alias: aliasFinal })

    const partidos = new Map<number, Acumulador>()

    for (const [col, valor] of Object.entries(row)) {
      if (COLUMNAS_IGNORAR.has(col.trim())) continue

      const info = partidoColMap.get(col.trim())
      if (!info) continue

      const valorTrim = valor?.toString().trim()
      if (!valorTrim) continue

      const goles = parseInt(valorTrim, 10)
      if (isNaN(goles)) continue

      let acc = partidos.get(info.numeroPartido)
      if (!acc) {
        acc = {}
        partidos.set(info.numeroPartido, acc)
      }

      if (info.esLocal) {
        acc.golesLocal = goles
      } else {
        acc.golesVisitante = goles
      }
    }

    for (const [numeroPartido, acc] of partidos.entries()) {
      if (acc.golesLocal === undefined || acc.golesVisitante === undefined) continue

      predicciones.push({
        participante: nombre,
        partido_no: numeroPartido,
        goles_local: acc.golesLocal,
        goles_visitante: acc.golesVisitante,
      })
    }
  }

  return { participantes, predicciones }
}