const BASE_URL = "https://api.football-data.org/v4"

// The API double-encodes some UTF-8 characters (e.g. "Curaçao" arrives as "CuraÃ§ao").
// This repairs those strings by re-interpreting each char as a raw byte and decoding as UTF-8.
function fixEncoding(str: string): string {
  try {
    return decodeURIComponent(
      str.split("").map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0")).join("")
    )
  } catch {
    return str
  }
}

export type MatchStatus =
  | "SCHEDULED"
  | "TIMED"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "SUSPENDED"
  | "POSTPONED"
  | "CANCELLED"

export type MatchResult = {
  apiId: number
  utcDate: string
  status: MatchStatus
  grupo: string
  equipoLocal: string
  equipoVisitante: string
  golesLocal: number | null
  golesVisitante: number | null
}

type ApiMatch = {
  id: number
  utcDate: string
  status: string
  group: string
  homeTeam: { name: string }
  awayTeam: { name: string }
  score: {
    fullTime: { home: number | null; away: number | null }
  }
}

type ApiResponse = {
  matches: ApiMatch[]
}

export async function getGroupStageResults(): Promise<MatchResult[]> {
  const res = await fetch(
    `${BASE_URL}/competitions/WC/matches?season=2026&stage=GROUP_STAGE`,
    {
      headers: { "X-Auth-Token": process.env.FOOTBALL_DATA_KEY! },
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) {
    throw new Error(`football-data.org error: ${res.status} ${res.statusText}`)
  }

  const data: ApiResponse = await res.json()

  return data.matches.map((m) => ({
    apiId: m.id,
    utcDate: m.utcDate,
    status: m.status as MatchStatus,
    grupo: m.group.replace("GROUP_", ""),
    equipoLocal: fixEncoding(m.homeTeam.name),
    equipoVisitante: fixEncoding(m.awayTeam.name),
    golesLocal: m.score.fullTime.home,
    golesVisitante: m.score.fullTime.away,
  }))
}
