// Maps partido_no (from predictions.ts) to football-data.org match ID
export const apiMatchId: Record<number, number> = {
   1: 537327,  2: 537328,  3: 537333,  4: 537345,
   5: 537340,  6: 537346,  7: 537339,  8: 537334,
   9: 537352, 10: 537351, 11: 537357, 12: 537358,
  13: 537370, 14: 537369, 15: 537364, 16: 537363,
  17: 537391, 18: 537392, 19: 537397, 20: 537398,
  21: 537410, 22: 537409, 23: 537403, 24: 537404,
  25: 537329, 26: 537335, 27: 537336, 28: 537330,
  29: 537341, 30: 537342, 31: 537347, 32: 537348,
  33: 537353, 34: 537354, 35: 537359, 36: 537360,
  37: 537372, 38: 537371, 39: 537365, 40: 537366,
  41: 537394, 42: 537393, 43: 537399, 44: 537400,
  45: 537411, 46: 537412, 47: 537405, 48: 537406,
  49: 537343, 50: 537344, 51: 537337, 52: 537338,
  53: 537331, 54: 537332, 55: 537356, 56: 537355,
  57: 537362, 58: 537361, 59: 537349, 60: 537350,
  61: 537395, 62: 537396, 63: 537368, 64: 537367,
  65: 537374, 66: 537373, 67: 537413, 68: 537414,
  69: 537402, 70: 537401, 71: 537407, 72: 537408,
}

// Reverse lookup: API match ID → partido_no
export const partidoByApiId: Record<number, number> = Object.fromEntries(
  Object.entries(apiMatchId).map(([pno, apiId]) => [apiId, Number(pno)])
)

// English API team name → Spanish display name (canonical source: lib/data/teams.ts)
export { esPorApi as teamNameEs } from "./teams"
