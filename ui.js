// ui.js — só desenha: lê dados e escreve HTML. Não decide nada do jogo.
// Os dados de EXEMPLO abaixo servem só para você ver o visual.
// Depois eles serão trocados pelos dados reais do jogo.

const EXEMPLO = {
  barra: "dia 3/5, ano 1 | primavera | 14h20",
  ouro: 120,
  zonas: {
    castelo: ["zona_1", "zona_2"],
    exercito: ["zona_1"],
    vila: ["zona_1"],
    producao: ["zona_1"],
  },
  construcoes: [
    { id: 1,  nome: "Sala do Trono",       grupo: "castelo",  zona: "zona_1" },
    { id: 2,  nome: "Salão de Banquetes",  grupo: "castelo",  zona: "zona_1" },
    { id: 3,  nome: "Biblioteca Real",     grupo: "castelo",  zona: "zona_2" },
    { id: 4,  nome: "Campo de Treinamento", grupo: "exercito", zona: "zona_1" },
    { id: 5,  nome: "Alojamento Militar",  grupo: "exercito", zona: "zona_1" },
    { id: 6,  nome: "Casa Simples",        grupo: "vila",     zona: "zona_1" },
    { id: 7,  nome: "Casa Média",          grupo: "vila",     zona: "zona_1" },
    { id: 8,  nome: "Poço de Água",        grupo: "vila",     zona: "zona_1" },
    { id: 9,  nome: "Fazenda",             grupo: "producao", zona: "zona_1" },
    { id: 10, nome: "Serraria",            grupo: "producao", zona: "zona_1" },
  ],
};

const NOMES_GRUPO = {
  castelo: "Castelo", exercito: "Exército", vila: "Vila", producao: "Produção",
  oficinas: "Oficinas", religiao: "Religião", magia: "Magia",
};

const ABAS = { sede: "Sede", mundo: "Mundo", estoque: "Estoque", povo: "Povo", politica: "Política", log: "Log" };

// As funções da esquerda mudam com a tela (aba) e com o que está selecionado:
//   nada       = nenhum grupo nem item escolhido
//   grupo      = o jogador tocou num grupo (só na Sede)
//   construcao = o jogador tocou numa construção (só na Sede)
const FUNCOES = {
  sede: {
    nada:       ["Nova zona"],
    grupo:      ["Construir aqui", "Nova zona", "Renomear zona"],
    construcao: ["Atribuir trabalho", "Melhorar", "Mover de zona", "Demolir"],
  },
  mundo:    { nada: ["Explorar", "Enviar mensageiro"] },
  estoque:  { nada: ["Ordenar", "Descartar"] },
  povo:     { nada: ["Contratar", "Filtrar"] },
  politica: { nada: ["Decretar", "Nomear conselheiro"] },
  log:      { nada: ["Filtrar", "Limpar"] },
};

// O que a tela está mostrando agora (separado do jogo)
const ui = {
  aba: "sede",
  zonaAtiva: { castelo: "zona_1", exercito: "zona_1", vila: "zona_1", producao: "zona_1" },
  grupoFechado: {},
  grupoAtivo: null,     // grupo tocado por último
  selecionado: null,    // id da construção tocada
  janela: null,         // "menu" quando a janela do menu está aberta
};

// ---------- Ajudantes ----------
function construcaoSelecionada() {
  for (const c of EXEMPLO.construcoes) {
    if (c.id === ui.selecionado) return c;
  }
  return null;
}

function contextoAtual() {
  if (ui.aba === "sede" && construcaoSelecionada()) return "construcao";
  if (ui.aba === "sede" && ui.grupoAtivo) return "grupo";
  return "nada";
}

// ---------- Coluna da esquerda ----------
function desenharAcoes() {
  const contexto = contextoAtual();
  const lista = FUNCOES[ui.aba][contexto] ?? FUNCOES[ui.aba].nada;

  let titulo = ABAS[ui.aba];
  if (contexto === "grupo") titulo = NOMES_GRUPO[ui.grupoAtivo];
  if (contexto === "construcao") titulo = construcaoSelecionada().nome;

  let html = `<h3>Funções</h3><p class="contexto">${titulo}</p>`;
  for (const f of lista) {
    html += `<button class="botao" data-acao="funcao">${f}</button>`;
  }
  html += `<button class="botao pequeno menu" data-acao="menu">Menu</button>`;

  document.getElementById("acoes").innerHTML = html;
}

// ---------- Barra do topo ----------
function desenharBarra() {
  document.getElementById("barra").innerHTML = `
    <span>${EXEMPLO.barra}</span>
    <span class="ouro">ouro ${EXEMPLO.ouro}</span>
    <span class="tempo">
      <button class="botao" data-acao="velocidade">Pausa</button>
      <button class="botao" data-acao="velocidade">1x</button>
      <button class="botao" data-acao="velocidade">2x</button>
      <button class="botao" data-acao="velocidade">3x</button>
    </span>`;
}

// ---------- Centro: a tela da aba atual ----------
function listaSede() {
  let html = "";

  for (const grupo in EXEMPLO.zonas) {
    const fechado = ui.grupoFechado[grupo];

    html += `<section class="g-${grupo}">
      <button class="titulo-grupo" data-acao="grupo" data-grupo="${grupo}">
        <span>${NOMES_GRUPO[grupo]}</span><span>${fechado ? "+" : "−"}</span>
      </button>`;

    if (!fechado) {
      html += `<div class="zonas">`;
      for (const z of EXEMPLO.zonas[grupo]) {
        const ativa = z === ui.zonaAtiva[grupo] ? " ativa" : "";
        html += `<button class="zona${ativa}" data-acao="zona" data-grupo="${grupo}" data-valor="${z}">${z}</button>`;
      }
      html += `<button class="zona" data-acao="novaZona" data-grupo="${grupo}">+</button></div>`;

      html += `<div class="cards">`;
      for (const c of EXEMPLO.construcoes) {
        if (c.grupo === grupo && c.zona === ui.zonaAtiva[grupo]) {
          const sel = c.id === ui.selecionado ? " selecionado" : "";
          html += `<button class="card${sel}" data-acao="item" data-grupo="${grupo}" data-valor="${c.id}">${c.nome}</button>`;
        }
      }
      html += `</div>`;
    }

    html += `</section>`;
  }
  return html;
}

function desenharCentro() {
  const centro = document.getElementById("centro");

  if (ui.aba === "sede") {
    centro.innerHTML = listaSede();
  } else {
    centro.innerHTML = `<p class="vazio">Aba ${ABAS[ui.aba]}: ainda sem conteúdo.</p>`;
  }
}

// ---------- Abas de baixo ----------
function desenharAbas() {
  let html = "";
  for (const a in ABAS) {
    const ativa = a === ui.aba ? " ativa" : "";
    html += `<button class="aba${ativa}" data-acao="aba" data-valor="${a}">${ABAS[a]}</button>`;
  }
  document.getElementById("abas").innerHTML = html;
}

// ---------- Coluna da direita ----------
function desenharInfo() {
  const c = construcaoSelecionada();

  let html = "";
  if (c) {
    html = `<h3>${c.nome}</h3>
      <dl>
        <dt>Grupo</dt><dd>${NOMES_GRUPO[c.grupo]}</dd>
        <dt>Zona</dt><dd>${c.zona}</dd>
        <dt>Trabalhadores</dt><dd>2/4</dd>
        <dt>Produção</dt><dd>+3 por dia</dd>
        <dt>Estado</dt><dd>funcionando</dd>
      </dl>`;
  } else {
    html = `<h3>Informações</h3>
      <p class="vazio">Toque numa construção para ver os detalhes.</p>`;
  }

  html += `<h3>Avisos</h3>
    <p>Falta água na Vila.</p>
    <p>Uma nova pessoa chegou ao reino.</p>`;

  document.getElementById("info").innerHTML = html;
}

// ---------- Janela do menu ----------
function desenharJanela() {
  const janela = document.getElementById("janela");

  if (ui.janela !== "menu") {
    janela.className = "escondido";
    janela.innerHTML = "";
    return;
  }

  janela.className = "";
  // data-acao="nada" faz um toque dentro da janela não fechar ela
  janela.innerHTML = `<div class="janela" data-acao="nada">
    <h3>Menu</h3>
    <div class="opcoes">
      <button class="botao" data-acao="inicio">Início</button>
      <button class="botao" data-acao="salvar">Salvar</button>
      <button class="botao" data-acao="carregar">Carregar</button>
      <button class="botao" data-acao="config">Configurações</button>
      <button class="botao" data-acao="guia">Guia</button>
      <button class="botao" data-acao="fechar">Fechar</button>
    </div>
  </div>`;
}

// ---------- Desenha tudo ----------
function redesenhar() {
  desenharAcoes();
  desenharBarra();
  desenharCentro();
  desenharAbas();
  desenharInfo();
  desenharJanela();
}

redesenhar();
