
const itens= {
  // ================= COMUM =================
  carvao_mineral: { nome: "Carvão Mineral", categoria: "material", raridade: "comum" },
  minerio_estanho: { nome: "Minério de Estanho", categoria: ["metal", "minerio"], raridade: "comum" },
  minerio_cobre: { nome: "Minério de Cobre", categoria: ["metal", "minerio"], raridade: "comum" },
  
  // Liga: Cobre + Estanho
  lingote_bronze: { nome: "Lingote de Bronze (Liga)", categoria: ["metal", "lingote", "textil"], raridade: "comum" }, 
  minerio_ferro: { nome: "Minério de Ferro", categoria: ["metal", "minerio"], raridade: "comum" },

  // ================= INCOMUM =================
  // Liga: Ferro + Carvão Mineral
  lingote_aco: { nome: "Lingote de Aço (Liga)", categoria: ["metal", "lingote", "textil"], raridade: "incomum" },
  minerio_prata: { nome: "Minério de Prata", categoria: ["metal", "minerio"], raridade: "incomum" },
  minerio_ouro: { nome: "Minério de Ouro", categoria: ["metal", "minerio"], raridade: "incomum" },

  // Liga: Ouro + Prata
  lingote_electro: { nome: "Lingote de Electro (Liga)", categoria: ["metal", "lingote", "textil"], raridade: "incomum" }, 
  minerio_ferro_frio: { nome: "Minério de Ferro Frio", categoria: ["metal", "minerio"], raridade: "incomum" },

  // ================= RARO =================
  minerio_mithril: { nome: "Minério de Mithril", categoria: ["metal", "minerio"], raridade: "raro" },
  minerio_platina: { nome: "Minério de Platina", categoria: ["metal", "minerio"], raridade: "raro" },
  minerio_titanio: { nome: "Minério de Titânio", categoria: ["metal", "minerio"], raridade: "raro" },
  minerio_obsidiana: { nome: "Minério de Obsidiana", categoria: ["metal", "minerio"], raridade: "raro" },

  // ================= ÉPICO =================
  minerio_adamantita: { nome: "Minério de Adamantita", categoria: ["metal", "minerio"], raridade: "epico" },
  minerio_oricalco: { nome: "Minério de Oricalco", categoria: ["metal", "minerio"], raridade: "epico" },
  minerio_torio: { nome: "Minério de Tório", categoria: ["metal", "minerio"], raridade: "epico" },
  minerio_ferro_negro: { nome: "Minério de Ferro Negro", categoria: ["metal", "minerio"], raridade: "epico" },

  // ================= LENDÁRIO =================
  minerio_draconico: { nome: "Minério Dracônico", categoria: ["metal", "minerio"], raridade: "lendario" },
  minerio_runico: { nome: "Minério Rúnico", categoria: ["metal", "minerio"], raridade: "lendario" },
  minerio_aco_estelar: { nome: "Minério de aço Estelar", categoria: ["metal", "minerio"], raridade: "lendario" },
  minerio_cobalto_arcano: { nome: "Minério de Cobalto Arcano", categoria: ["metal", "minerio"], raridade: "lendario" },

  // ================= MÍTICO =================
  minerio_eterio: { nome: "Minério de Etério", categoria: ["metal", "minerio"], raridade: "mitico" },
  minerio_celestial: { nome: "Minério Celestial", categoria: ["metal", "minerio"], raridade: "mitico" },
  minerio_abissal: { nome: "Minério Abissal", categoria: ["metal", "minerio"], raridade: "mitico" },
  minerio_luminite: { nome: "Minério de Luminate", categoria: ["metal", "minerio"], raridade: "mitico" },
  
  // ===== produtos genericos até resolver ====== 
  carne: { nome: "Carne genérica", categoria: ["comida", "animal"] },
  vegetais: { nome: "Vegetais genérico", categoria: ["comida", "vegetal"] },
  comidas: { nome: "Comida generica", categoria: ["comida", "animal","vegetal"] },
  fruta: { nome: "fruta genérica", categoria: ["comida", "vegetal"] },
  
  // ================= CARNES E DERIVADOS (ANIMAL) =================
// carne vai ser gerado proceduralmente dependendo da especie e variaveis como zumbi, corrompido, abençoado, slime, solido.
  // leite semelhante a carne
  // ovo semelhante a carne
  peixe: { nome: "Carne de Peixe", categoria: ["comida", "animal"] },
  
  // ================= ALIMENTOS DE CULTIVO - PRIMAVERA (VEGETAL) =================
  morango: { nome: "Morango", categoria: ["comida", "vegetal"] },
  ervilha: { nome: "Ervilha Fresca", categoria: ["comida", "vegetal"] },
  espinafre: { nome: "Espinafre", categoria: ["comida", "vegetal"] },

  // ================= ALIMENTOS DE CULTIVO - VERÃO (VEGETAL) =================
  tomate: { nome: "Tomate", categoria: ["comida", "vegetal"] },
  milho: { nome: "Espiga de Milho", categoria: ["comida", "vegetal"] },
  melancia: { nome: "Melancia", categoria: ["comida", "vegetal"] },

  // ================= ALIMENTOS DE CULTIVO - OUTONO (VEGETAL) =================
  abobora: { nome: "Abóbora", categoria: ["comida", "vegetal"] },
  maca: { nome: "Maçã", categoria: ["comida", "vegetal"] },
  batata_doce: { nome: "Batata-Doce", categoria: ["comida", "vegetal"] },

  // ================= ALIMENTOS DE CULTIVO - INVERNO (VEGETAL) =================
  cenoura: { nome: "Cenoura", categoria: ["comida", "vegetal"] },
  beterraba: { nome: "Beterraba", categoria: ["comida", "vegetal"] },
  repolho: { nome: "Repolho", categoria: ["comida", "vegetal"] },
  
  // ================= TÊXTEIS DE ORIGEM ANIMAL =================
  la: { nome: "Lã", categoria: ["textil", "animal"] },
  seda: { nome: "Seda", categoria: ["textil", "animal"] },
  teia: { nome: "Teia", categoria: ["textil", "animal"] },

  // ================= TÊXTEIS DE ORIGEM VEGETAL =================
  algodao: { nome: "Algodão", categoria: ["textil", "vegetal"] },
  linho: { nome: "Linho", categoria: ["textil", "vegetal"] },
  sisal: { nome: "Sisal", categoria: ["textil", "vegetal"] }, //corda
  
  // ================= BRUTOS =================
  madeira: { nome: "Madeira", categoria: ["construcao", "bruto"] },
  pedra: { nome: "pedra", categoria: ["construcao", "bruto"] },
  // adicionar pedra marmore, granito, diorito, andesito, basalto e ardósia
  argila: { nome: "Argila", categoria: ["construcao", "bruto"] },
  areia: { nome: "Areia", categoria: ["construcao", "bruto"] },
  palha: { nome: "Palha", categoria: ["construcao", "bruto"] },
  
  // ================= PROCESSADOS =================
  // tábua é procedural carvalho, ebano...
  // blocos, pisos, pilares derivados de diferentes tipos de rochas
  tijolo: { nome: "Tijolo", categoria: ["construcao", "processado"] },
  telha: { nome: "Telha", categoria: ["construcao", "processado"] },
  vidro: { nome: "Vidro", categoria: ["construcao", "processado"] },
  prego: { nome: "Prego", categoria: ["construcao", "processado"] },
  corda: { nome: "Corda", categoria: ["construcao", "processado"] },
};
  
  
  
  