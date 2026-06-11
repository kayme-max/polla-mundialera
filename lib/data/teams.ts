export type Equipo = {
  nombreEs:  string
  nombreApi: string
  grupo:     string
  iso2:      string  // flagcdn.com country code
}

export const equipos: Equipo[] = [
  // ── Grupo A ────────────────────────────────────────────────────────────
  { nombreEs: "México",          nombreApi: "Mexico",             grupo: "A", iso2: "mx"     },
  { nombreEs: "Sudáfrica",       nombreApi: "South Africa",       grupo: "A", iso2: "za"     },
  { nombreEs: "Rep. de Corea",   nombreApi: "South Korea",        grupo: "A", iso2: "kr"     },
  { nombreEs: "Checa",           nombreApi: "Czechia",            grupo: "A", iso2: "cz"     },

  // ── Grupo B ────────────────────────────────────────────────────────────
  { nombreEs: "Canadá",          nombreApi: "Canada",             grupo: "B", iso2: "ca"     },
  { nombreEs: "Bosnia/Herzeg.",  nombreApi: "Bosnia-Herzegovina", grupo: "B", iso2: "ba"     },
  { nombreEs: "Qatar",           nombreApi: "Qatar",              grupo: "B", iso2: "qa"     },
  { nombreEs: "Suiza",           nombreApi: "Switzerland",        grupo: "B", iso2: "ch"     },

  // ── Grupo C ────────────────────────────────────────────────────────────
  { nombreEs: "Brasil",          nombreApi: "Brazil",             grupo: "C", iso2: "br"     },
  { nombreEs: "Marruecos",       nombreApi: "Morocco",            grupo: "C", iso2: "ma"     },
  { nombreEs: "Haiti",           nombreApi: "Haiti",              grupo: "C", iso2: "ht"     },
  { nombreEs: "Escocia",         nombreApi: "Scotland",           grupo: "C", iso2: "gb-sct" },

  // ── Grupo D ────────────────────────────────────────────────────────────
  { nombreEs: "EE.UU.",          nombreApi: "United States",      grupo: "D", iso2: "us"     },
  { nombreEs: "Paraguay",        nombreApi: "Paraguay",           grupo: "D", iso2: "py"     },
  { nombreEs: "Australia",       nombreApi: "Australia",          grupo: "D", iso2: "au"     },
  { nombreEs: "Turquía",         nombreApi: "Turkey",             grupo: "D", iso2: "tr"     },

  // ── Grupo E ────────────────────────────────────────────────────────────
  { nombreEs: "Alemania",        nombreApi: "Germany",            grupo: "E", iso2: "de"     },
  { nombreEs: "Curazao",         nombreApi: "Curaçao",            grupo: "E", iso2: "cw"     },
  { nombreEs: "Costa de Marfil", nombreApi: "Ivory Coast",        grupo: "E", iso2: "ci"     },
  { nombreEs: "Ecuador",         nombreApi: "Ecuador",            grupo: "E", iso2: "ec"     },

  // ── Grupo F ────────────────────────────────────────────────────────────
  { nombreEs: "Países Bajos",    nombreApi: "Netherlands",        grupo: "F", iso2: "nl"     },
  { nombreEs: "Japón",           nombreApi: "Japan",              grupo: "F", iso2: "jp"     },
  { nombreEs: "Suecia",          nombreApi: "Sweden",             grupo: "F", iso2: "se"     },
  { nombreEs: "Túnez",           nombreApi: "Tunisia",            grupo: "F", iso2: "tn"     },

  // ── Grupo G ────────────────────────────────────────────────────────────
  { nombreEs: "Bélgica",         nombreApi: "Belgium",            grupo: "G", iso2: "be"     },
  { nombreEs: "Egipto",          nombreApi: "Egypt",              grupo: "G", iso2: "eg"     },
  { nombreEs: "IR Irán",         nombreApi: "Iran",               grupo: "G", iso2: "ir"     },
  { nombreEs: "Nueva Zelanda",   nombreApi: "New Zealand",        grupo: "G", iso2: "nz"     },

  // ── Grupo H ────────────────────────────────────────────────────────────
  { nombreEs: "España",          nombreApi: "Spain",              grupo: "H", iso2: "es"     },
  { nombreEs: "Cabo Verde",      nombreApi: "Cape Verde Islands", grupo: "H", iso2: "cv"     },
  { nombreEs: "Arabia Saudita",  nombreApi: "Saudi Arabia",       grupo: "H", iso2: "sa"     },
  { nombreEs: "Uruguay",         nombreApi: "Uruguay",            grupo: "H", iso2: "uy"     },

  // ── Grupo I ────────────────────────────────────────────────────────────
  { nombreEs: "Francia",         nombreApi: "France",             grupo: "I", iso2: "fr"     },
  { nombreEs: "Senegal",         nombreApi: "Senegal",            grupo: "I", iso2: "sn"     },
  { nombreEs: "Iraq",            nombreApi: "Iraq",               grupo: "I", iso2: "iq"     },
  { nombreEs: "Noruega",         nombreApi: "Norway",             grupo: "I", iso2: "no"     },

  // ── Grupo J ────────────────────────────────────────────────────────────
  { nombreEs: "Argentina",       nombreApi: "Argentina",          grupo: "J", iso2: "ar"     },
  { nombreEs: "Argelia",         nombreApi: "Algeria",            grupo: "J", iso2: "dz"     },
  { nombreEs: "Austria",         nombreApi: "Austria",            grupo: "J", iso2: "at"     },
  { nombreEs: "Jordán",          nombreApi: "Jordan",             grupo: "J", iso2: "jo"     },

  // ── Grupo K ────────────────────────────────────────────────────────────
  { nombreEs: "Portugal",        nombreApi: "Portugal",           grupo: "K", iso2: "pt"     },
  { nombreEs: "RD Congo",        nombreApi: "Congo DR",           grupo: "K", iso2: "cd"     },
  { nombreEs: "Uzbekistán",      nombreApi: "Uzbekistan",         grupo: "K", iso2: "uz"     },
  { nombreEs: "Colombia",        nombreApi: "Colombia",           grupo: "K", iso2: "co"     },

  // ── Grupo L ────────────────────────────────────────────────────────────
  { nombreEs: "Inglaterra",      nombreApi: "England",            grupo: "L", iso2: "gb-eng" },
  { nombreEs: "Croacia",         nombreApi: "Croatia",            grupo: "L", iso2: "hr"     },
  { nombreEs: "Ghana",           nombreApi: "Ghana",              grupo: "L", iso2: "gh"     },
  { nombreEs: "Panamá",          nombreApi: "Panama",             grupo: "L", iso2: "pa"     },
]

// Lookups derivados
export const apiPorEs:   Record<string, string> = Object.fromEntries(equipos.map((e) => [e.nombreEs,  e.nombreApi]))
export const esPorApi:   Record<string, string> = Object.fromEntries(equipos.map((e) => [e.nombreApi, e.nombreEs]))
export const grupoPorEs: Record<string, string> = Object.fromEntries(equipos.map((e) => [e.nombreEs,  e.grupo]))
export const iso2PorApi: Record<string, string> = Object.fromEntries(equipos.map((e) => [e.nombreApi, e.iso2]))
export const iso2PorEs:  Record<string, string> = Object.fromEntries(equipos.map((e) => [e.nombreEs,  e.iso2]))
