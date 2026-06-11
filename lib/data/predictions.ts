export type Participante = {
  nombre: string
  alias: string
}

export type Partido = {
  partido_no: number
  fecha: string
  horario: string
  equipo_local: string
  equipo_visitante: string
  grupo: string
  estadio: string
}

export type Prediccion = {
  participante: string
  partido_no: number
  goles_local: number
  goles_visitante: number
}

export const participantes: Participante[] = [
  { nombre: "Andrés Díaz",        alias: "El rolo"            },
  { nombre: "Nicolas Toro",       alias: "NICO TORO U"        },
  { nombre: "Alejandra Toro",     alias: "Tora Pichanguera"   },
  { nombre: "Francisco Henríquez",alias: "F.Henríquez"        },
  { nombre: "Christian Homberger",alias: "Christian Homberger"},
]

export const partidos: Partido[] = [
  { partido_no:  1, fecha: "2026-06-11", horario: "15:00", equipo_local: "México",          equipo_visitante: "Sudáfrica",      grupo: "A", estadio: "Mexico City"           },
  { partido_no:  2, fecha: "2026-06-12", horario: "22:00", equipo_local: "Rep. de Corea",   equipo_visitante: "Checa",          grupo: "A", estadio: "Guadalajara"           },
  { partido_no:  3, fecha: "2026-06-12", horario: "15:00", equipo_local: "Canadá",          equipo_visitante: "Bosnia/Herzeg.", grupo: "B", estadio: "Toronto"               },
  { partido_no:  4, fecha: "2026-06-13", horario: "21:00", equipo_local: "EE.UU.",          equipo_visitante: "Paraguay",       grupo: "D", estadio: "Los Angeles"           },
  { partido_no:  5, fecha: "2026-06-14", horario: "21:00", equipo_local: "Haiti",           equipo_visitante: "Escocia",        grupo: "C", estadio: "Boston"                },
  { partido_no:  6, fecha: "2026-06-14", horario: "00:00", equipo_local: "Australia",       equipo_visitante: "Turquía",        grupo: "D", estadio: "Vancouver"             },
  { partido_no:  7, fecha: "2026-06-14", horario: "18:00", equipo_local: "Brasil",          equipo_visitante: "Marruecos",      grupo: "C", estadio: "New York/New Jersey"   },
  { partido_no:  8, fecha: "2026-06-13", horario: "15:00", equipo_local: "Qatar",           equipo_visitante: "Suiza",          grupo: "B", estadio: "San Francisco Bay Area"},
  { partido_no:  9, fecha: "2026-06-15", horario: "19:00", equipo_local: "Costa de Marfil", equipo_visitante: "Ecuador",        grupo: "E", estadio: "Philadelphia"          },
  { partido_no: 10, fecha: "2026-06-14", horario: "13:00", equipo_local: "Alemania",        equipo_visitante: "Curazao",        grupo: "E", estadio: "Houston"               },
  { partido_no: 11, fecha: "2026-06-14", horario: "16:00", equipo_local: "Países Bajos",    equipo_visitante: "Japón",          grupo: "F", estadio: "Dallas"                },
  { partido_no: 12, fecha: "2026-06-15", horario: "22:00", equipo_local: "Suecia",          equipo_visitante: "Túnez",          grupo: "F", estadio: "Monterrey"             },
  { partido_no: 13, fecha: "2026-06-16", horario: "18:00", equipo_local: "Arabia Saudita",  equipo_visitante: "Uruguay",        grupo: "H", estadio: "Miami"                 },
  { partido_no: 14, fecha: "2026-06-15", horario: "12:00", equipo_local: "España",          equipo_visitante: "Cabo Verde",     grupo: "H", estadio: "Atlanta"               },
  { partido_no: 15, fecha: "2026-06-16", horario: "21:00", equipo_local: "IR Irán",         equipo_visitante: "Nueva Zelanda",  grupo: "G", estadio: "Los Angeles"           },
  { partido_no: 16, fecha: "2026-06-15", horario: "15:00", equipo_local: "Bélgica",         equipo_visitante: "Egipto",         grupo: "G", estadio: "Seattle"               },
  { partido_no: 17, fecha: "2026-06-16", horario: "15:00", equipo_local: "Francia",         equipo_visitante: "Senegal",        grupo: "I", estadio: "New York/New Jersey"   },
  { partido_no: 18, fecha: "2026-06-17", horario: "18:00", equipo_local: "Iraq",            equipo_visitante: "Noruega",        grupo: "I", estadio: "Boston"                },
  { partido_no: 19, fecha: "2026-06-17", horario: "21:00", equipo_local: "Argentina",       equipo_visitante: "Argelia",        grupo: "J", estadio: "Kansas City"           },
  { partido_no: 20, fecha: "2026-06-17", horario: "00:00", equipo_local: "Austria",         equipo_visitante: "Jordán",         grupo: "J", estadio: "San Francisco Bay Area"},
  { partido_no: 21, fecha: "2026-06-18", horario: "19:00", equipo_local: "Ghana",           equipo_visitante: "Panamá",         grupo: "L", estadio: "Toronto"               },
  { partido_no: 22, fecha: "2026-06-17", horario: "16:00", equipo_local: "Inglaterra",      equipo_visitante: "Croacia",        grupo: "L", estadio: "Dallas"                },
  { partido_no: 23, fecha: "2026-06-17", horario: "13:00", equipo_local: "Portugal",        equipo_visitante: "RD Congo",       grupo: "K", estadio: "Houston"               },
  { partido_no: 24, fecha: "2026-06-18", horario: "22:00", equipo_local: "Uzbekistán",      equipo_visitante: "Colombia",       grupo: "K", estadio: "Mexico City"           },
  { partido_no: 25, fecha: "2026-06-18", horario: "12:00", equipo_local: "Checa",           equipo_visitante: "Sudáfrica",      grupo: "A", estadio: "Atlanta"               },
  { partido_no: 26, fecha: "2026-06-18", horario: "15:00", equipo_local: "Suiza",           equipo_visitante: "Bosnia/Herzeg.", grupo: "B", estadio: "Los Angeles"           },
  { partido_no: 27, fecha: "2026-06-19", horario: "18:00", equipo_local: "Canadá",          equipo_visitante: "Qatar",          grupo: "B", estadio: "Vancouver"             },
  { partido_no: 28, fecha: "2026-06-19", horario: "21:00", equipo_local: "México",          equipo_visitante: "Rep. de Corea",  grupo: "A", estadio: "Guadalajara"           },
  { partido_no: 29, fecha: "2026-06-20", horario: "20:30", equipo_local: "Brasil",          equipo_visitante: "Haiti",          grupo: "C", estadio: "Philadelphia"          },
  { partido_no: 30, fecha: "2026-06-20", horario: "18:00", equipo_local: "Escocia",         equipo_visitante: "Marruecos",      grupo: "C", estadio: "Boston"                },
  { partido_no: 31, fecha: "2026-06-20", horario: "23:00", equipo_local: "Turquía",         equipo_visitante: "Paraguay",       grupo: "D", estadio: "San Francisco Bay Area"},
  { partido_no: 32, fecha: "2026-06-19", horario: "15:00", equipo_local: "EE.UU.",          equipo_visitante: "Australia",      grupo: "D", estadio: "Seattle"               },
  { partido_no: 33, fecha: "2026-06-20", horario: "16:00", equipo_local: "Alemania",        equipo_visitante: "Costa de Marfil",grupo: "E", estadio: "Toronto"               },
  { partido_no: 34, fecha: "2026-06-21", horario: "20:00", equipo_local: "Ecuador",         equipo_visitante: "Curazao",        grupo: "E", estadio: "Kansas City"           },
  { partido_no: 35, fecha: "2026-06-20", horario: "13:00", equipo_local: "Países Bajos",    equipo_visitante: "Suecia",         grupo: "F", estadio: "Houston"               },
  { partido_no: 36, fecha: "2026-06-21", horario: "00:00", equipo_local: "Túnez",           equipo_visitante: "Japón",          grupo: "F", estadio: "Monterrey"             },
  { partido_no: 37, fecha: "2026-06-22", horario: "18:00", equipo_local: "Uruguay",         equipo_visitante: "Cabo Verde",     grupo: "H", estadio: "Miami"                 },
  { partido_no: 38, fecha: "2026-06-21", horario: "12:00", equipo_local: "España",          equipo_visitante: "Arabia Saudita", grupo: "H", estadio: "Atlanta"               },
  { partido_no: 39, fecha: "2026-06-21", horario: "15:00", equipo_local: "Bélgica",         equipo_visitante: "IR Irán",        grupo: "G", estadio: "Los Angeles"           },
  { partido_no: 40, fecha: "2026-06-22", horario: "21:00", equipo_local: "Nueva Zelanda",   equipo_visitante: "Egipto",         grupo: "G", estadio: "Vancouver"             },
  { partido_no: 41, fecha: "2026-06-23", horario: "20:00", equipo_local: "Noruega",         equipo_visitante: "Senegal",        grupo: "I", estadio: "New York/New Jersey"   },
  { partido_no: 42, fecha: "2026-06-22", horario: "17:00", equipo_local: "Francia",         equipo_visitante: "Iraq",           grupo: "I", estadio: "Philadelphia"          },
  { partido_no: 43, fecha: "2026-06-22", horario: "13:00", equipo_local: "Argentina",       equipo_visitante: "Austria",        grupo: "J", estadio: "Dallas"                },
  { partido_no: 44, fecha: "2026-06-23", horario: "23:00", equipo_local: "Jordán",          equipo_visitante: "Argelia",        grupo: "J", estadio: "San Francisco Bay Area"},
  { partido_no: 45, fecha: "2026-06-23", horario: "16:00", equipo_local: "Inglaterra",      equipo_visitante: "Ghana",          grupo: "L", estadio: "Boston"                },
  { partido_no: 46, fecha: "2026-06-24", horario: "19:00", equipo_local: "Panamá",          equipo_visitante: "Croacia",        grupo: "L", estadio: "Toronto"               },
  { partido_no: 47, fecha: "2026-06-23", horario: "13:00", equipo_local: "Portugal",        equipo_visitante: "Uzbekistán",     grupo: "K", estadio: "Houston"               },
  { partido_no: 48, fecha: "2026-06-24", horario: "22:00", equipo_local: "Colombia",        equipo_visitante: "RD Congo",       grupo: "K", estadio: "Guadalajara"           },
  { partido_no: 49, fecha: "2026-06-25", horario: "18:00", equipo_local: "Escocia",         equipo_visitante: "Brasil",         grupo: "C", estadio: "Miami"                 },
  { partido_no: 50, fecha: "2026-06-25", horario: "18:00", equipo_local: "Marruecos",       equipo_visitante: "Haiti",          grupo: "C", estadio: "Atlanta"               },
  { partido_no: 51, fecha: "2026-06-24", horario: "15:00", equipo_local: "Suiza",           equipo_visitante: "Canadá",         grupo: "B", estadio: "Vancouver"             },
  { partido_no: 52, fecha: "2026-06-24", horario: "15:00", equipo_local: "Bosnia/Herzeg.",  equipo_visitante: "Qatar",          grupo: "B", estadio: "Seattle"               },
  { partido_no: 53, fecha: "2026-06-25", horario: "21:00", equipo_local: "Checa",           equipo_visitante: "México",         grupo: "A", estadio: "Mexico City"           },
  { partido_no: 54, fecha: "2026-06-25", horario: "21:00", equipo_local: "Sudáfrica",       equipo_visitante: "Rep. de Corea",  grupo: "A", estadio: "Monterrey"             },
  { partido_no: 55, fecha: "2026-06-25", horario: "16:00", equipo_local: "Curazao",         equipo_visitante: "Costa de Marfil",grupo: "E", estadio: "Philadelphia"          },
  { partido_no: 56, fecha: "2026-06-25", horario: "16:00", equipo_local: "Ecuador",         equipo_visitante: "Alemania",       grupo: "E", estadio: "New York/New Jersey"   },
  { partido_no: 57, fecha: "2026-06-26", horario: "19:00", equipo_local: "Japón",           equipo_visitante: "Suecia",         grupo: "F", estadio: "Dallas"                },
  { partido_no: 58, fecha: "2026-06-26", horario: "19:00", equipo_local: "Túnez",           equipo_visitante: "Países Bajos",   grupo: "F", estadio: "Kansas City"           },
  { partido_no: 59, fecha: "2026-06-26", horario: "22:00", equipo_local: "Turquía",         equipo_visitante: "EE.UU.",         grupo: "D", estadio: "Los Angeles"           },
  { partido_no: 60, fecha: "2026-06-26", horario: "22:00", equipo_local: "Paraguay",        equipo_visitante: "Australia",      grupo: "D", estadio: "San Francisco Bay Area"},
  { partido_no: 61, fecha: "2026-06-26", horario: "15:00", equipo_local: "Noruega",         equipo_visitante: "Francia",        grupo: "I", estadio: "Boston"                },
  { partido_no: 62, fecha: "2026-06-26", horario: "15:00", equipo_local: "Senegal",         equipo_visitante: "Iraq",           grupo: "I", estadio: "Toronto"               },
  { partido_no: 63, fecha: "2026-06-27", horario: "23:00", equipo_local: "Egipto",          equipo_visitante: "IR Irán",        grupo: "G", estadio: "Seattle"               },
  { partido_no: 64, fecha: "2026-06-27", horario: "23:00", equipo_local: "Nueva Zelanda",   equipo_visitante: "Bélgica",        grupo: "G", estadio: "Vancouver"             },
  { partido_no: 65, fecha: "2026-06-27", horario: "20:00", equipo_local: "Cabo Verde",      equipo_visitante: "Arabia Saudita", grupo: "H", estadio: "Houston"               },
  { partido_no: 66, fecha: "2026-06-27", horario: "20:00", equipo_local: "Uruguay",         equipo_visitante: "España",         grupo: "H", estadio: "Guadalajara"           },
  { partido_no: 67, fecha: "2026-06-27", horario: "17:00", equipo_local: "Panamá",          equipo_visitante: "Inglaterra",     grupo: "L", estadio: "New York/New Jersey"   },
  { partido_no: 68, fecha: "2026-06-27", horario: "17:00", equipo_local: "Croacia",         equipo_visitante: "Ghana",          grupo: "L", estadio: "Philadelphia"          },
  { partido_no: 69, fecha: "2026-06-28", horario: "22:00", equipo_local: "Argelia",         equipo_visitante: "Austria",        grupo: "J", estadio: "Kansas City"           },
  { partido_no: 70, fecha: "2026-06-28", horario: "22:00", equipo_local: "Jordán",          equipo_visitante: "Argentina",      grupo: "J", estadio: "Dallas"                },
  { partido_no: 71, fecha: "2026-06-28", horario: "19:30", equipo_local: "Colombia",        equipo_visitante: "Portugal",       grupo: "K", estadio: "Miami"                 },
  { partido_no: 72, fecha: "2026-06-28", horario: "19:30", equipo_local: "RD Congo",        equipo_visitante: "Uzbekistán",     grupo: "K", estadio: "Atlanta"               },
]

// [partido_no, goles_local, goles_visitante]
type RawScore = [number, number, number]

const rawPredicciones: Record<string, RawScore[]> = {
  "Andrés Díaz": [
    [ 1,2,0],[ 2,1,1],[ 3,2,1],[ 4,2,1],[ 5,0,3],[ 6,1,2],[ 7,2,1],[ 8,0,2],
    [ 9,1,1],[10,4,0],[11,2,1],[12,2,0],[13,0,2],[14,3,0],[15,1,0],[16,2,1],
    [17,2,1],[18,0,3],[19,3,0],[20,2,0],[21,2,1],[22,2,1],[23,3,0],[24,0,2],
    [25,2,0],[26,2,1],[27,2,0],[28,1,1],[29,4,0],[30,1,1],[31,1,1],[32,2,1],
    [33,2,1],[34,3,0],[35,2,1],[36,1,2],[37,2,0],[38,3,1],[39,2,1],[40,1,2],
    [41,1,1],[42,3,0],[43,2,0],[44,0,1],[45,2,1],[46,0,2],[47,2,0],[48,2,0],
    [49,1,2],[50,3,0],[51,1,1],[52,2,1],[53,1,2],[54,0,2],[55,0,3],[56,1,2],
    [57,1,1],[58,1,3],[59,1,2],[60,2,1],[61,1,3],[62,2,0],[63,1,1],[64,0,3],
    [65,1,1],[66,1,1],[67,0,3],[68,2,1],[69,1,1],[70,0,4],[71,1,1],[72,1,2],
  ],
  "Nicolas Toro": [
    [ 1,2,0],[ 2,1,1],[ 3,1,0],[ 4,2,1],[ 5,0,2],[ 6,1,2],[ 7,3,1],[ 8,0,2],
    [ 9,1,2],[10,4,0],[11,2,1],[12,2,0],[13,1,2],[14,4,1],[15,1,0],[16,2,0],
    [17,3,0],[18,1,2],[19,2,0],[20,1,0],[21,2,0],[22,2,1],[23,3,1],[24,0,2],
    [25,2,1],[26,2,0],[27,3,1],[28,1,1],[29,4,0],[30,1,2],[31,1,1],[32,3,1],
    [33,3,1],[34,3,0],[35,1,1],[36,0,2],[37,3,0],[38,2,0],[39,2,0],[40,0,2],
    [41,2,1],[42,4,1],[43,2,1],[44,1,2],[45,3,1],[46,0,2],[47,2,0],[48,3,0],
    [49,1,2],[50,2,0],[51,1,1],[52,2,1],[53,1,2],[54,1,2],[55,1,2],[56,1,2],
    [57,2,1],[58,0,3],[59,1,2],[60,2,2],[61,1,3],[62,2,0],[63,1,1],[64,0,3],
    [65,0,1],[66,0,2],[67,0,3],[68,2,1],[69,1,1],[70,0,3],[71,2,3],[72,1,1],
  ],
  "Alejandra Toro": [
    [ 1,2,0],[ 2,1,1],[ 3,2,0],[ 4,2,1],[ 5,0,2],[ 6,0,3],[ 7,3,1],[ 8,1,3],
    [ 9,0,2],[10,3,0],[11,1,0],[12,3,0],[13,1,0],[14,5,0],[15,1,1],[16,2,1],
    [17,2,1],[18,0,3],[19,2,0],[20,2,0],[21,1,2],[22,3,2],[23,3,0],[24,0,3],
    [25,1,0],[26,2,0],[27,1,1],[28,2,0],[29,4,0],[30,1,3],[31,4,2],[32,2,1],
    [33,3,1],[34,2,0],[35,1,2],[36,2,3],[37,2,0],[38,2,0],[39,3,1],[40,2,1],
    [41,1,2],[42,4,0],[43,2,1],[44,0,1],[45,3,1],[46,0,1],[47,2,0],[48,2,0],
    [49,1,3],[50,3,1],[51,1,1],[52,0,2],[53,1,3],[54,0,1],[55,2,2],[56,1,4],
    [57,1,4],[58,0,3],[59,3,1],[60,2,1],[61,1,2],[62,2,0],[63,2,2],[64,1,3],
    [65,1,1],[66,1,1],[67,0,2],[68,2,0],[69,0,1],[70,0,3],[71,2,4],[72,2,0],
  ],
  "Francisco Henríquez": [
    [ 1,2,1],[ 2,1,1],[ 3,2,1],[ 4,2,1],[ 5,0,2],[ 6,1,2],[ 7,2,1],[ 8,0,2],
    [ 9,1,1],[10,3,0],[11,2,1],[12,2,1],[13,1,2],[14,3,0],[15,2,0],[16,2,1],
    [17,2,1],[18,1,2],[19,2,0],[20,2,1],[21,1,1],[22,2,1],[23,3,1],[24,1,2],
    [25,1,1],[26,2,1],[27,2,1],[28,1,1],[29,3,0],[30,1,2],[31,1,1],[32,1,1],
    [33,2,1],[34,2,0],[35,2,1],[36,1,2],[37,2,0],[38,2,0],[39,1,1],[40,0,1],
    [41,1,1],[42,3,0],[43,2,1],[44,1,2],[45,2,0],[46,1,2],[47,2,0],[48,2,0],
    [49,1,2],[50,2,0],[51,1,1],[52,1,1],[53,1,2],[54,1,2],[55,1,2],[56,1,2],
    [57,1,1],[58,0,2],[59,1,1],[60,1,1],[61,1,2],[62,2,1],[63,1,1],[64,0,2],
    [65,1,1],[66,1,1],[67,1,2],[68,2,1],[69,1,1],[70,0,3],[71,1,1],[72,1,1],
  ],
  "Christian Homberger": [
    [ 1,1,0],[ 2,1,1],[ 3,1,0],[ 4,0,0],[ 5,0,2],[ 6,0,2],[ 7,2,1],[ 8,0,2],
    [ 9,1,1],[10,4,0],[11,2,0],[12,2,1],[13,0,1],[14,5,0],[15,1,0],[16,1,0],
    [17,2,0],[18,0,3],[19,2,0],[20,2,0],[21,2,1],[22,1,0],[23,2,0],[24,0,2],
    [25,1,1],[26,1,0],[27,2,0],[28,1,1],[29,3,0],[30,0,2],[31,1,1],[32,2,0],
    [33,2,1],[34,2,0],[35,2,0],[36,0,1],[37,2,0],[38,2,0],[39,1,0],[40,0,1],
    [41,1,1],[42,2,0],[43,1,0],[44,0,2],[45,1,0],[46,0,2],[47,2,0],[48,2,0],
    [49,0,2],[50,3,0],[51,1,0],[52,1,0],[53,0,1],[54,0,1],[55,0,1],[56,0,1],
    [57,1,0],[58,0,1],[59,1,1],[60,1,0],[61,0,1],[62,2,0],[63,1,1],[64,0,2],
    [65,0,2],[66,0,2],[67,0,2],[68,1,0],[69,1,1],[70,0,3],[71,1,2],[72,1,0],
  ],
}

export const predicciones: Prediccion[] = Object.entries(rawPredicciones).flatMap(
  ([participante, scores]) =>
    scores.map(([partido_no, goles_local, goles_visitante]) => ({
      participante,
      partido_no,
      goles_local,
      goles_visitante,
    }))
)
