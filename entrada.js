// entrada.js — todo toque chega aqui. Um ouvinte só decide o que fazer,
// olhando o data-acao do botão tocado.
// Por enquanto só troca o que aparece na tela, para você ver o visual.

document.addEventListener("click", function (e) {
  const el = e.target.closest("[data-acao]");
  if (!el) return;

  const acao = el.dataset.acao;
  const valor = el.dataset.valor;

  if (acao === "aba") {
    ui.aba = valor;
    ui.selecionado = null;
    ui.grupoAtivo = null;
  }

  if (acao === "grupo") {
    ui.grupoFechado[el.dataset.grupo] = !ui.grupoFechado[el.dataset.grupo];
    ui.grupoAtivo = el.dataset.grupo;
    ui.selecionado = null;
  }

  if (acao === "zona") {
    ui.zonaAtiva[el.dataset.grupo] = valor;
    ui.grupoAtivo = el.dataset.grupo;
    ui.selecionado = null;
  }

  if (acao === "item") {
    ui.selecionado = Number(valor);
    ui.grupoAtivo = el.dataset.grupo;
  }

  if (acao === "menu")   { ui.janela = "menu"; }
  if (acao === "fechar") { ui.janela = null; }

  // funcao, velocidade, novaZona, inicio, salvar, carregar, config e guia ainda não fazem nada

  redesenhar();
});
