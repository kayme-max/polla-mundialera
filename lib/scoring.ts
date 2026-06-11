import type { Prediccion } from "./data/predictions"
import type { MatchResult } from "./api/football"
import { apiMatchId } from "./data/matchMapping"

export type PuntosPartido = {
  resultado: number   // 0 | 5
  golesLocal: number  // 0 | 2
  golesVisitante: number // 0 | 2
  diferencia: number  // 0 | 1
  total: number       // 0–10
}

export type ResumenParticipante = {
  participante: string
  alias: string
  puntosTotal: number
  partidosJugados: number
}

export function calcularPuntosPartido(
  pred: Prediccion,
  resultado: MatchResult
): PuntosPartido | null {
  if (resultado.status !== "FINISHED") return null
  if (resultado.golesLocal === null || resultado.golesVisitante === null) return null

  const rl = resultado.golesLocal
  const rv = resultado.golesVisitante
  const pl = pred.goles_local
  const pv = pred.goles_visitante

  const ganadorReal = rl > rv ? "L" : rl < rv ? "V" : "E"
  const ganadorPred = pl > pv ? "L" : pl < pv ? "V" : "E"

  const pResultado    = ganadorReal === ganadorPred ? 5 : 0
  const pGolesLocal   = pl === rl ? 2 : 0
  const pGolesVisit   = pv === rv ? 2 : 0
  const pDiferencia   = (pl - pv) === (rl - rv) ? 1 : 0

  return {
    resultado:      pResultado,
    golesLocal:     pGolesLocal,
    golesVisitante: pGolesVisit,
    diferencia:     pDiferencia,
    total:          pResultado + pGolesLocal + pGolesVisit + pDiferencia,
  }
}

export function calcularResumenParticipantes(
  predicciones: Prediccion[],
  participantes: { nombre: string; alias: string }[],
  resultados: MatchResult[]
): ResumenParticipante[] {
  const resultadoByApiId = new Map(resultados.map((r) => [r.apiId, r]))

  return participantes.map(({ nombre, alias }) => {
    const predParticipante = predicciones.filter((p) => p.participante === nombre)
    let puntosTotal = 0
    let partidosJugados = 0

    for (const pred of predParticipante) {
      const apiId = apiMatchId[pred.partido_no]
      const resultado = resultadoByApiId.get(apiId)
      if (!resultado) continue

      const puntos = calcularPuntosPartido(pred, resultado)
      if (puntos !== null) {
        puntosTotal += puntos.total
        partidosJugados++
      }
    }

    return { participante: nombre, alias, puntosTotal, partidosJugados }
  })
}
