
// dna.js — DNA do personagem: um objeto legível e um código de dígitos.
//
// O objeto:
//   { raca: "elfo", sexo: "feminino",
//     fisico: { vida: 92, forca: 88, ... }, mental: { ... }, alma: { ... },
//     traits: ["forte"] }
//
// O código: texto de dígitos em blocos de 3 (000 a 999), nesta ordem:
//   raça | sexo | físico | mental | alma | traits (um bloco por trait, quantos tiver)
//
// - raça, sexo e trait: a janela 000-999 é dividida em partes iguais, uma para cada opção.
// - status: o bloco é o próprio valor em % (100 = média humana; 999 = teto).
//
// Se você mudar a quantidade de raças ou de traits, os códigos já salvos passam a
// significar outra coisa (você já aceitou isso).
// Carregue este arquivo depois de dados_base.js, raca.js e traits.js.

const SEXOS = ["masculino", "feminino"];

// A ordem das seções é a ordem do código. Um único laço lê e escreve tudo.
//   opcao  = escolhe UMA da lista (raça, sexo)
//   valor  = um valor em % para cada nome da lista (os status)
//   varias = quantas da lista quiser (traits)
const SECOES = [
  { nome: "raca",   tipo: "opcao",  lista: Object.keys(RACAS) },
  { nome: "sexo",   tipo: "opcao",  lista: SEXOS },
  { nome: "fisico", tipo: "valor",  lista: Object.keys(fisico) },
  { nome: "mental", tipo: "valor",  lista: Object.keys(mental) },
  { nome: "alma",   tipo: "valor",  lista: Object.keys(alma) },
  { nome: "traits", tipo: "varias", lista: Object.keys(TRAITS) },
];

// ---------- Números para ajustar ----------
const TETO = 999;                   // maior valor de um status (999%)
const VARIACAO_NATURAL = 0.10;      // personagem natural nasce até 10% acima ou abaixo da média da raça
const MELHORA_FILHO = 0.03;         // filho fica entre os pais, com até 3% a mais ou a menos nas pontas
const CHANCE_TRAIT_NOVO = 0.70;     // chance do 1º trait; a de cada seguinte é multiplicada por FATOR_TRAIT
const CHANCE_TRAIT_HERDADO = 0.50;  // chance de um trait do pai ou da mãe passar para o filho
const FATOR_TRAIT = 0.50;

// ---------- Ajudantes ----------
function tresDigitos(n) {
  return String(n).padStart(3, "0");
}

function limitar(valor) {
  return Math.max(0, Math.min(TETO, Math.round(valor)));   // nunca passa de 999, para o código não quebrar
}

// A janela 000-999 dividida em partes iguais, uma por opção
function opcaoDoBloco(lista, bloco) {
  return lista[Math.floor(bloco * lista.length / 1000)];
}

function blocoDaOpcao(lista, opcao) {
  const i = Math.max(0, lista.indexOf(opcao));   // opção que saiu do jogo vira a primeira da lista
  return Math.floor((i + 0.5) * 1000 / lista.length);   // o meio da janela dela
}

function sortear(lista, sorteio) {
  return lista[Math.floor(sorteio() * lista.length)];   // chances iguais
}

// Acrescenta traits novos: a chance de cada um é menor que a do anterior
function sortearTraits(sorteio, traits, lista) {
  while (traits.length < lista.length) {
    const chance = CHANCE_TRAIT_NOVO * FATOR_TRAIT ** traits.length;
    if (sorteio() >= chance) break;

    const restantes = [];
    for (const t of lista) {
      if (!traits.includes(t)) restantes.push(t);
    }
    traits.push(sortear(restantes, sorteio));
  }
}

// ---------- Criar um personagem natural ----------
// "sorteio" é uma função que devolve um número de 0 a 1 (pode ser Math.random).
// Sem a raça, ela é sorteada com chances iguais.
function criarDNA(sorteio, raca) {
  const dna = {};

  for (const secao of SECOES) {
    if (secao.tipo === "opcao") {
      dna[secao.nome] = sortear(secao.lista, sorteio);
      if (secao.nome === "raca" && raca) dna.raca = raca;

    } else if (secao.tipo === "valor") {
      dna[secao.nome] = {};
      for (const chave of secao.lista) {
        const media = RACAS[dna.raca].status[chave] ?? 100;
        dna[secao.nome][chave] = limitar(media * (1 - VARIACAO_NATURAL + sorteio() * 2 * VARIACAO_NATURAL));
      }

    } else {
      dna[secao.nome] = [];
      sortearTraits(sorteio, dna[secao.nome], secao.lista);
    }
  }
  return dna;
}

// ---------- Objeto -> código ----------
function montarCodigo(dna) {
  let codigo = "";

  for (const secao of SECOES) {
    if (secao.tipo === "opcao") {
      codigo += tresDigitos(blocoDaOpcao(secao.lista, dna[secao.nome]));

    } else if (secao.tipo === "valor") {
      for (const chave of secao.lista) {
        codigo += tresDigitos(limitar(dna[secao.nome][chave] ?? 100));
      }

    } else {
      for (const t of dna[secao.nome]) {
        codigo += tresDigitos(blocoDaOpcao(secao.lista, t));
      }
    }
  }
  return codigo;
}

// ---------- Código -> objeto ----------
function lerCodigo(codigo) {
  const dna = {};
  let pos = 0;

  // lê o próximo bloco de 3 dígitos; se o código acabou, devolve o padrão
  function proximo(padrao) {
    const texto = codigo.slice(pos, pos + 3);
    pos += 3;
    return texto.length === 3 ? Number(texto) : padrao;
  }

  for (const secao of SECOES) {
    if (secao.tipo === "opcao") {
      dna[secao.nome] = opcaoDoBloco(secao.lista, proximo(0));

    } else if (secao.tipo === "valor") {
      dna[secao.nome] = {};
      for (const chave of secao.lista) {
        dna[secao.nome][chave] = proximo(RACAS[dna.raca].status[chave] ?? 100);
      }

    } else {
      dna[secao.nome] = [];
      while (pos + 3 <= codigo.length) {
        dna[secao.nome].push(opcaoDoBloco(secao.lista, proximo(0)));
      }
    }
  }
  return dna;
}

// ---------- Filho de dois personagens ----------
function misturarDNA(pai, mae, sorteio) {
  const filho = {};

  for (const secao of SECOES) {
    const nome = secao.nome;

    if (secao.tipo === "opcao") {
      if (nome === "raca") {
        filho[nome] = sorteio() < 0.5 ? pai.raca : mae.raca;   // a raça de um dos pais
      } else {
        filho[nome] = sortear(secao.lista, sorteio);            // o sexo é sorteado
      }

    } else if (secao.tipo === "valor") {
      // cada status fica entre o do pai e o da mãe, com uma folga de 3% nas pontas
      filho[nome] = {};
      for (const chave of secao.lista) {
        const a = pai[nome][chave] ?? 100;
        const b = mae[nome][chave] ?? 100;
        const menor = Math.min(a, b) * (1 - MELHORA_FILHO);
        const maior = Math.max(a, b) * (1 + MELHORA_FILHO);
        filho[nome][chave] = limitar(menor + sorteio() * (maior - menor));
      }

    } else {
      filho[nome] = herdarTraits(pai[nome], mae[nome], sorteio, secao.lista);
    }
  }
  return filho;
}

function herdarTraits(traitsPai, traitsMae, sorteio, lista) {
  const candidatos = [];
  for (const t of traitsPai.concat(traitsMae)) {
    if (!candidatos.includes(t)) candidatos.push(t);
  }

  const filho = [];
  for (const t of candidatos) {
    const chance = CHANCE_TRAIT_HERDADO * FATOR_TRAIT ** filho.length;
    if (sorteio() < chance) filho.push(t);
  }

  sortearTraits(sorteio, filho, lista);   // depois, chance de ganhar traits novos
  return filho;
}

// ---------- Status do personagem (o potencial, ainda sem a fase da vida) ----------
function statusDoDNA(dna) {
  const status = {};

  for (const secao of SECOES) {
    if (secao.tipo !== "valor") continue;
    for (const chave of secao.lista) {
      status[chave] = dna[secao.nome][chave] ?? 100;
    }
  }

  for (const t of dna.traits) {
    if (!TRAITS[t]) continue;                    // trait que saiu do jogo
    for (const chave in TRAITS[t].status) {
      status[chave] = (status[chave] ?? 100) + TRAITS[t].status[chave];
    }
  }
  return status;
}