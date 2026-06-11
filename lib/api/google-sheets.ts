import { google } from "googleapis"
import type { Prediccion, Participante } from "../data/predictions"

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  })
}

export async function getPrediccionesFromSheet(): Promise<{
  participantes: Participante[]
  predicciones: Prediccion[]
}> {
  const auth = getAuth()
  const sheets = google.sheets({ version: "v4", auth })

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Respuestas!A1:BV100", // fila 1 = headers, resto = participantes
  })

  const rows = res.data.values ?? []
  if (rows.length < 2) return { participantes: [], predicciones: [] }

  const headers = rows[0] // ["nombre", "alias", "P001", "P002", ...]
  const dataRows = rows.slice(1)

  const participantes: Participante[] = []
  const predicciones: Prediccion[] = []

  for (const row of dataRows) {
    const nombre = row[0]?.trim()
    const alias  = row[1]?.trim()
    if (!nombre) continue

    participantes.push({ nombre, alias })

    for (let col = 2; col < headers.length; col++) {
      const header = headers[col] // "P001", "P002", etc.
      const partido_no = parseInt(header.replace("P", ""), 10)
      if (isNaN(partido_no)) continue

      const celda = row[col]?.trim() // "2-1", "0-0", etc.
      if (!celda) continue

      const [localStr, visitStr] = celda.split("-")
      const goles_local     = parseInt(localStr, 10)
      const goles_visitante = parseInt(visitStr, 10)
      if (isNaN(goles_local) || isNaN(goles_visitante)) continue

      predicciones.push({ participante: nombre, partido_no, goles_local, goles_visitante })
    }
  }

  return { participantes, predicciones }
}