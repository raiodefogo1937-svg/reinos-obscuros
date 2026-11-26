
const trabalhos = {

  // ================= SERVIÇOS (sem "local": qualquer construção, 1 por construção) =================
  faxineira: { nome: "Faxineira", efeito: "limpeza" },
  vigia:     { nome: "Vigia",     efeito: "defesa" },
  tutor:     { nome: "Tutor",     efeito: "estudo" },

  // ================= CASTELO =================
  carcereiro:    { nome: "Carcereiro",    local: ["calabouco"], efeito: "prisao" },
  bibliotecario: { nome: "Bibliotecário", local: ["biblioteca_real", "biblioteca_arcana"], efeito: "estudo" },
  cozinheiro:    { nome: "Cozinheiro",    local: ["cozinha"], efeito: "cozinha" },

  // ================= EXÉRCITO =================
  instrutor: { nome: "Instrutor", local: ["campo_treinamento", "campo_arqueria"], efeito: "treino" },
  armeiro:   { nome: "Armeiro",   local: ["arsenal"], efeito: "armamento" },
  sentinela: { nome: "Sentinela", local: ["muralha", "torre_vigia"], efeito: "defesa" },
  guarda:    { nome: "Guarda",    local: ["portao_fortificado"], limite: 2, efeito: "defesa" },

  // ================= VILA =================
  taverneiro:    { nome: "Taverneiro",    local: ["taverna"], limite: 2, efeito: "taverna" },
  professor:     { nome: "Professor",     local: ["escola"], limite: 5, efeito: "estudo" },
  cuidador:      { nome: "Cuidador",      local: ["orfanato"], limite: 3, efeito: "cuidado" },
  estalajadeiro: { nome: "Estalajadeiro", local: ["estalagem"], limite: 3, efeito: "hospedagem" },
  curandeiro:    { nome: "Curandeiro",    local: ["curandeiro"], limite: 2, efeito: "cura" },

  // ================= PRODUÇÃO =================
  // A estação em que cada cultura pode ser plantada ainda não está nos itens.
  fazendeiro: { nome: "Fazendeiro", local: ["fazenda"], limite: 6, terreno: "prado", slots: 1, quantidade: 9, producao: ["vegetais"],}, // ver melhor isso depois e mudar 
  lenhador:  { nome: "Lenhador",  local: ["serraria"], limite: 2, terreno: "floresta", slots: 1, producao: ["madeira"], quantidade: 2 },
  minerador: { nome: "Minerador", local: ["pedreira"], limite: 2, terreno: "pedra", slots: 1, producao: ["pedra"], quantidade: 2 },
  coletor:   { nome: "Coletor",   local: ["acampamento"], limite: 5, terreno: "prado", slots: 1, producao: ["comidas","madeira","pedra"], quantidade: 6 },  //comidas com s
  pescador:  { nome: "Pescador",  local: ["cabana_pesca"], limite: 3, terreno: "rio", slots: 2, producao: ["peixe"], quantidade: 9 },
  cacador:   { nome: "Caçador",   local: ["cabana_caca"], limite: 3, terreno: "prado", slots: 2, producao: ["carne"], quantidade: 9 },   // carne vai ser procedural
  pastor:    { nome: "Pastor",    local: ["pasto"], limite: 5, terreno: "prado", slots: 1, efeito: "criacao" },
  pomareiro: { nome: "Pomareiro", local: ["pomar"], terreno: "floresta", slots: 1, producao: ["fruta"], quantidade: 2 },
  criador_insetos: { nome: "Criador de Insetos", local: ["inseticultura"], limite: 2, efeito: "insetos" },
  carvoeiro: { nome: "Carvoeiro", local: ["carvoaria"], limite: 2, producao: ["carvao_mineral"], quantidade: 2 },
  cavador:   { nome: "Cavador",   local: ["cava"], limite: 3, terreno: "rio", slots: 1, producao: ["areia", "argila"], quantidade: 2 },

  // ================= OFICINAS =================
  ferreiro:   { nome: "Ferreiro",   local: ["ferreiro"], limite: 2, efeito: "forja" },
  alfaiate:   { nome: "Alfaiate",   local: ["alfaiataria"], limite: 2, efeito: "costura" },
  destilador: { nome: "Destilador", local: ["destilaria"], limite: 2, efeito: "destilacao" },
  carpinteiro:{ nome: "Carpinteiro",local: ["carpintaria"], limite: 2, efeito: "carpintaria" },
  alquimista: { nome: "Alquimista", local: ["alquimista"], limite: 2, efeito: "alquimia" },
  oleiro:     { nome: "Oleiro",     local: ["olaria"], limite: 2, efeito: "ceramica" },
  joalheiro:  { nome: "Joalheiro",  local: ["joalheria"], limite: 2, efeito: "joalheria" },
  encantador: { nome: "Encantador", local: ["oficina_arcana"], limite: 2, efeito: "encantamento" },
  mercador:   { nome: "Mercador",   local: ["mercado"], limite: 2, efeito: "comercio" },

  // ================= RELIGIÃO E MAGIA =================
  sacerdote: { nome: "Sacerdote", local: ["templo"], limite: 3, efeito: "culto" },
  coveiro:   { nome: "Coveiro",   local: ["cemiterio"], efeito: "sepultura" },
  astronomo: { nome: "Astrônomo", local: ["observatorio"], efeito: "astronomia" },
};

// ---------- Perguntas sobre os dados ----------

// Esta profissão aceita esta construção? Sem "local" (ou lista vazia) vale qualquer uma.
function aceitaConstrucao(tipoTrabalho, tipoConstrucao) {
  const local = trabalhos[tipoTrabalho].local;
  return !local || local.length === 0 || local.includes(tipoConstrucao);
}

// Quantas pessoas cabem numa construção: o total e quantas de cada profissão.
function vagasDaConstrucao(tipoConstrucao) {
  const porTrabalho = {};
  let total = 0;

  for (const t in trabalhos) {
    if (!aceitaConstrucao(t, tipoConstrucao)) continue;
    const limite = trabalhos[t].limite ?? 1;
    porTrabalho[t] = limite;
    total += limite;
  }
  return { total: total, porTrabalho: porTrabalho };
}