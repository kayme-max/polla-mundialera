const BASE_URL = "https://v3.football.api-sports.io"
const API_KEY = process.env.API_FOOTBALL_KEY!

const WC_LEAGUE_ID = 1
const WC_SEASON = 2026

async function apiFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "x-apisports-key": API_KEY,
    },
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`API-Football error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()

  if (json.errors && Object.keys(json.errors).length > 0) {
    throw new Error(`API-Football errors: ${JSON.stringify(json.errors)}`)
  }

  return json
}

export function getFixtures() {
  return apiFetch(`/fixtures?league=${WC_LEAGUE_ID}&season=${WC_SEASON}`)
}

export function getTeams() {
  return apiFetch(`/teams?league=${WC_LEAGUE_ID}&season=${WC_SEASON}`)
}

export function getStandings() {
  return apiFetch(`/standings?league=${WC_LEAGUE_ID}&season=${WC_SEASON}`)
}

export function getLeagueInfo() {
  return apiFetch(`/leagues?id=${WC_LEAGUE_ID}&season=${WC_SEASON}`)
}

export function getFixtureById(fixtureId: number) {
  return apiFetch(`/fixtures?id=${fixtureId}`)
}
