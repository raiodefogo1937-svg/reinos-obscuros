

// reinado.js — o registro de UM reino: os dados e as perguntas sobre eles.
// Nada aqui muda o jogo: construir, produzir e gastar ouro ficam em producao.js,
// a divisão dos slots entre zonas em zonas.js, e o texto da tela em ui.js.
//
// Carregue depois de construcoes.js e antes de ui.js.

const TERRENOS = ["prado", "floresta", "pedra", "rio"];

// Território de um reino novo: 50 slots (1 slot = 1 hexágono)
const TERRITORIO_INICIAL = { prado: 34, floresta: 6, pedra: 5, rio: 5 };

// ---------- Criar um reino ----------
// Os slots de uma zona ficam em  reino.zonas[grupo][zona]  por terreno, por exemplo { prado: 4, pedra: 1 }.
// Uma zona nova começa sem slots; o jogador decide quantos dar a ela.
function criarReino(nome, territorio) {
  const reino = {
    nome: nome,
    lider: null,
    ouro: 0,
    estoque: {},
    territorio: { ...(territorio ?? TERRITORIO_INICIAL) },
    zonas: {},
    construcoes: [],   // { id: 1, tipo: "casa_simples", zona: "zona_1", trabalhadores: [] }
    pessoas: [],       // { id: 1, nome: "Aelar", codigo: "...", nascimento: -2000000 }
    proximoId: 1,
  };

  for (const grupo in construcoes) {
    reino.zonas[grupo] = { zona_1: {} };   // cada grupo começa com uma zona vazia
  }
  return reino;
}

// O reino em que o jogador está
function reinoAtual() {
  return jogo.reinos[jogo.reinoAtual];
}

// ---------- Dados de uma construção ----------
// Procura o tipo nos grupos do construcoes.js e devolve os dados dele com o grupo.
// Campos opcionais (se faltarem, valem o padrão):  terreno ("prado"), slots (1), moradia (0)
function dadosDaConstrucao(tipo) {
  for (const grupo in construcoes) {
    if (construcoes[grupo][tipo]) {
      return { ...construcoes[grupo][tipo], grupo: grupo };
    }
  }
  return null;
}

// ---------- Slots ----------
function somar(slots) {
  let total = 0;
  for (const terreno in slots) total += slots[terreno];
  return total;
}

// Slots dados a uma zona, por terreno (é com isso que a produção calcula, por exemplo,
// o acampamento: madeira pelos slots de floresta, pedra pelos de pedra...)
function slotsDaZona(reino, grupo, zona) {
  return reino.zonas[grupo]?.[zona] ?? {};
}

// Slots do território que ainda não foram dados a nenhuma zona
function slotsLivres(reino) {
  const livres = { ...reino.territorio };

  for (const grupo in reino.zonas) {
    for (const zona in reino.zonas[grupo]) {
      const dados = reino.zonas[grupo][zona];
      for (const terreno in dados) {
        livres[terreno] = (livres[terreno] ?? 0) - dados[terreno];
      }
    }
  }
  return livres;
}

// Slots de uma zona que as construções já ocupam
function slotsOcupados(reino, grupo, zona) {
  const ocupados = {};

  for (const c of reino.construcoes) {
    const d = dadosDaConstrucao(c.tipo);
    if (!d || d.grupo !== grupo || c.zona !== zona) continue;

    const terreno = d.terreno ?? "prado";
    ocupados[terreno] = (ocupados[terreno] ?? 0) + (d.slots ?? 1);
  }
  return ocupados;
}

// Slots de uma zona que ainda estão vazios
function slotsLivresDaZona(reino, grupo, zona) {
  const livres = { ...slotsDaZona(reino, grupo, zona) };
  const ocupados = slotsOcupados(reino, grupo, zona);

  for (const terreno in ocupados) {
    livres[terreno] = (livres[terreno] ?? 0) - ocupados[terreno];
  }
  return livres;
}

// Esta construção cabe nesta zona? (só pergunta; quem constrói é o producao.js)
function cabeNaZona(reino, tipo, zona) {
  const d = dadosDaConstrucao(tipo);
  if (!d) return false;

  const livres = slotsLivresDaZona(reino, d.grupo, zona);
  return (livres[d.terreno ?? "prado"] ?? 0) >= (d.slots ?? 1);
}

// ---------- Construções ----------
function construcoesDaZona(reino, grupo, zona) {
  const lista = [];
  for (const c of reino.construcoes) {
    const d = dadosDaConstrucao(c.tipo);
    if (d && d.grupo === grupo && c.zona === zona) lista.push(c);
  }
  return lista;
}

function contar(reino, tipo) {
  let total = 0;
  for (const c of reino.construcoes) {
    if (c.tipo === tipo) total++;
  }
  return total;
}

// ---------- Povo ----------
// A capacidade é a soma da moradia das construções. Sem pessoas e sem moradia, dá 0/0.
function povo(reino) {
  let capacidade = 0;
  for (const c of reino.construcoes) {
    capacidade += dadosDaConstrucao(c.tipo)?.moradia ?? 0;
  }
  return { atual: reino.pessoas.length, capacidade: capacidade };
}