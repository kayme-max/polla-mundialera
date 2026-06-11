import type { MatchResult } from "./api/football"
import { esPorApi, iso2PorApi } from "./data/teams"

export type FilaTabla = {
  equipoApi: string
  equipo: string
  iso2: string
  pj: number
  pg: number
  pe: number
  pp: number
  gf: number
  gc: number
  dg: number
  pts: number
}

export type TablaGrupo = {
  grupo: string
  filas: FilaTabla[]
}

export function calcularTablasGrupo(resultados: MatchResult[]): TablaGrupo[] {
  const stats = new Map<string, FilaTabla>()

  for (const m of resultados) {
    for (const t of [m.equipoLocal, m.equipoVisitante]) {
      if (!stats.has(t)) {
        stats.set(t, {
          equipoApi: t,
          equipo: esPorApi[t] ?? t,
          iso2: iso2PorApi[t] ?? "",
          pj: 0, pg: 0, pe: 0, pp: 0,
          gf: 0, gc: 0, dg: 0, pts: 0,
        })
      }
    }
  }

  for (const m of resultados) {
    if (m.status !== "FINISHED" || m.golesLocal === null || m.golesVisitante === null) continue
    const local = stats.get(m.equipoLocal)!
    const visit = stats.get(m.equipoVisitante)!
    const gl = m.golesLocal
    const gv = m.golesVisitante

    local.pj++; visit.pj++
    local.gf += gl; local.gc += gv
    visit.gf += gv; visit.gc += gl

    if (gl > gv) {
      local.pg++; local.pts += 3
      visit.pp++
    } else if (gl < gv) {
      visit.pg++; visit.pts += 3
      local.pp++
    } else {
      local.pe++; local.pts++
      visit.pe++; visit.pts++
    }

    local.dg = local.gf - local.gc
    visit.dg = visit.gf - visit.gc
  }

  const grupos = new Map<string, Set<string>>()
  for (const m of resultados) {
    if (!grupos.has(m.grupo)) grupos.set(m.grupo, new Set())
    grupos.get(m.grupo)!.add(m.equipoLocal)
    grupos.get(m.grupo)!.add(m.equipoVisitante)
  }

  return Array.from(grupos.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([grupo, equipos]) => ({
      grupo,
      filas: Array.from(equipos)
        .map((eq) => stats.get(eq)!)
        .sort((a, b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf || a.equipo.localeCompare(b.equipo)),
    }))
}
