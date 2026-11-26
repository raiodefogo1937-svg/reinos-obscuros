
const CALENDARIO = {
  diasPorSemana: 3,
  diasPorMes: 12,
  mesesPorAno: 12,
  diasPorCicloLua: 9,
  diasSemana: ["segunda", "sexta", "domingo"],
  estacoes: ["primavera", "verão", "outono", "inverno"],
  fasesLua: ["nova", "crescente", "cheia", "minguante"],
};

function lerTempo(minutosTotais) {
  const C = CALENDARIO;
  const diaTotal = Math.floor(minutosTotais / 1440);

  return {
    hora:      Math.floor((minutosTotais % 1440) / 60),
    minuto:    minutosTotais % 60,
    dia:       diaTotal % C.diasPorMes + 1,
    diaSemana: C.diasSemana[diaTotal % C.diasPorSemana],
    mes:       Math.floor(diaTotal / C.diasPorMes) % C.mesesPorAno + 1,
    ano:       Math.floor(diaTotal / (C.diasPorMes * C.mesesPorAno)) + 1,
    estacao:   C.estacoes[Math.floor(diaTotal / C.diasPorMes / 3) % 4],
    lua: C.fasesLua[Math.floor((diaTotal % C.diasPorCicloLua) / (C.diasPorCicloLua / C.fasesLua.length))],
  };
}