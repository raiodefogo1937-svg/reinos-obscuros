const construcoes = {

  // ================= CASTELOS (Cômodos e estruturas internas) =================

  castelo: {
  	
  acampamento: { nome: "Acampamento", custo: { madeira: 10, pedra: 10 }, moradia: 5, armaz: 5, slots: 3, terreno: "prado"},

  //sala_trono: { nome: "Sala do Trono", custo: { madeira: 5, pedra: 11 }, slots: 2, terreno: "prado"},

 //salao_banquetes: { nome: "Salão de Banquetes", custo: { madeira: 3, pedra: 14 }, slots: 3, terreno: "prado"},

  aposentos_reais: { nome: "Aposentos Reais", custo: { madeira: 3, pedra: 7 }, moradia: 2, slots: 1, terreno: "prado"},
  
  quarto_empregados: { nome: "Quarto dos Empregados", custo: { madeira: 6, pedra: 17 }, moradia: 8, slots: 3, terreno: "prado"},

  calabouco: { nome: "Calabouço", custo: { madeira: 2, pedra: 11 }, prisioneiro: 4,  slots: 2, terreno: "prado"},

  biblioteca_real: { nome: "Biblioteca Real", custo: { madeira: 17, pedra: 9 }, slots: 4, terreno: "prado"},

  //sala_conselho: { nome: "Sala do Conselho" },

  cozinha: { nome: "Cozinha Real", custo: { madeira: 6, pedra: 14 }, slots: 3, terreno: "prado"}
},



  // ================= EXÉRCITO (Defesa e treinamento militar) =================
 //somente pessoas que moram no alojamento podem trabalhar no exército 
  exercito: {

  campo_treinamento: { nome: "Campo de Treinamento", custo: { madeira: 6, pedra: 21 }, slots: 4, terreno: "prado", defesa: 3},
 //alojamento nao paga imposto 
  alojamento: { nome: "Alojamento Militar", custo: { madeira: 10, pedra: 11 }, slots: 3, moradia: 10, armaz: 10, terreno: "prado", defesa: 5},
  //arsenal separado do estoque 
  arsenal: { nome: "Arsenal", custo: { madeira: 9, pedra: 4 }, slots: 1, armaz: 50, terreno: "prado", defesa: 2},

  campo_arqueria: { nome: "Campo de Arqueria", custo: { madeira: 10, pedra: 17 }, slots: 6, terreno: "prado", defesa: 3},

  muralha: { nome: "Muralha Defensiva", custo: { madeira: 3, pedra: 40 }, slots: 1, terreno: "prado", defesa: 10},

  portao_fortificado: { nome: "Portão Fortificado", custo: { madeira: 8, pedra: 30 }, slots: 1, terreno: "prado", defesa: 8},

  torre_vigia: { nome: "Torre de Vigia" , custo: { madeira: 12, pedra: 20 }, slots: 1, terreno: "prado", defesa: 9}
},



  // ================= VILA (Habitação, comércio e serviços) =================

  vila: {

  casa_simples: { nome: "Casa Simples", custo: { madeira: 10, pedra: 5 }, slots: 1, moradia: 3, terreno: "prado"},

  casa_media: { nome: "Casa Média", custo: { madeira: 13, pedra: 9 }, slots: 2, moradia: 6, terreno: "prado"},

  casa_grande: { nome: "Casa Grande", custo: { madeira: 17, pedra: 14 }, slots: 3, moradia: 10, terreno: "prado"},

  //praca: { nome: "Praça", custo: { madeira: 5, pedra: 17 }, slots: 4, terreno: "prado"},

  taverna: { nome: "Taverna", custo: { madeira: 15, pedra: 5 }, slots: 1, terreno: "prado"},

  escola: { nome: "Escola", custo: { madeira: 22, pedra: 12 }, slots: 4, terreno: "prado"},

  orfanato: { nome: "Orfanato", custo: { madeira: 19, pedra: 15 }, slots: 4, moradia: 15, terreno: "prado"},


  estalagem: { nome: "Estalagem", custo: { madeira: 25, pedra: 15 }, slots: 5, terreno: "prado", visitantes: 10},

  curandeiro: { nome: "Curandeiro" , custo: { madeira: 15, pedra: 5 }, slots: 1, terreno: "prado"},

  //poco_agua: { nome: "Poço de Água", custo: { madeira: 15, pedra: 5 }, slots: 1, terreno: "prado"},

  armazem_geral: { nome: "Armazém Geral", custo: { madeira: 20, pedra: 5 }, slots: 1, armaz: 50, terreno: "prado"},
},



  // ================= PRODUÇÃO (Extração e recursos primários) =================

  producao: {
 //fazenda produz por morador e quantidade de prados em volta, 1 morador lida com um prado até 6 prado, cada fazeda so pode produzir uma variedade por vez, duas fazenda na mesma zona produzindo o mesmo produto bufa 10%. fazendas não podem usar o mesmo prado.
  fazenda: { nome: "Fazenda", custo: { madeira: 15, pedra: 6 }, slots: 3, moradia: 6, terreno: "prado"},

  serraria: { nome: "Serraria", custo: { madeira: 15, pedra: 5 }, slots: 1, terreno: "floresta"},

  pedreira: { nome: "Pedreira", custo: { madeira: 5, pedra: 15 }, slots: 1, terreno: "pedra"},

  //igual a cabana de caça, mas usa rio em vez de prado
  cabana_pesca: { nome: "Cabana de Pesca", custo: { madeira: 9, pedra: 5 }, slots: 1, terreno: "prado"},
  
  //cabana de caça funciona semelhante a fazenda mas apenas com 3 pessoas cada uma podendo cacar em 2 slots de prado. sem variedade 
  cabana_caca: { nome: "Cabana de Caça", custo: { madeira: 10, pedra: 4 }, slots: 2, terreno: "prado"},
 
 //pasto funciona igual a fazenda. 10 animais por prado ate 6 prado, precisa de comida para animais
  pasto: { nome: "Pasto de Criação", custo: { madeira: 15, pedra: 6 }, slots: 3, moradia: 5, terreno: "prado", animais: 10},

  pomar: { nome: "Pomar", custo: { madeira: 3, pedra: 1 }, slots: 1, terreno: "floresta"},

  inseticultura: { nome: "Fazenda de Insetos", custo: { madeira: 15, pedra: 5 }, slots: 1, terreno: "prado"},

  carvoaria: { nome: "Carvoaria", custo: { madeira: 9, pedra: 5 }, slots: 1, terreno: "prado"},
  //cava funciona semelhante a pesca precisando de rio 
  cava: { nome: "Cava de areia e argila" , custo: { madeira: 9, pedra: 5 }, slots: 1, terreno: "prado"},
},



  // ================= OFICINAS (Refino e artesanato) =================

  oficinas: {

  ferreiro: { nome: "Ferreiro", custo: { madeira: 5, pedra: 15 }, slots: 1, terreno: "prado"},

  alfaiataria: { nome: "Alfaiataria", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},

  destilaria: { nome: "Destilaria", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},

  carpintaria: { nome: "Carpintaria", custo: { madeira: 15, pedra: 5 }, slots: 1, terreno: "prado"},

  alquimista: { nome: "Laboratório de Alquimia", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},

  olaria: { nome: "Olaria", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},

  joalheria: { nome: "Joalheria", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},

  oficina_arcana: { nome: "Oficina Arcana", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},
  
  mercado: { nome: "Mercado", custo: { madeira: 10, pedra: 5 }, slots: 1, terreno: "prado"},
},



  // ================= RELIGIÃO (6ª categoria sugerida) =================

  religiao:{

  templo: { nome: "Templo", custo: { madeira: 8, pedra: 15 }, slots: 2, terreno: "prado"},

  mosteiro: { nome: "Mosteiro", custo: { madeira: 7, pedra: 13 }, slots: 2, moradia: 5, armaz: 10, terreno: "prado"}, 
 //cemitério mais 10 covas por prado
  cemiterio: { nome: "Cemitério", custo: { madeira: 4, pedra: 15 }, slots: 4, terreno: "prado", covas: 10},

 // santuario: { nome: "Santuário"custo: { madeira: 4, pedra: 10 }, slots: 1, terreno: "prado"},
},

  

  // ================= MAGIA (ESTUDO, CRIAÇÃO E PESQUISA =================

  magia:{

  biblioteca_arcana: { nome: "Biblioteca Arcana", custo: { madeira: 18, pedra: 8 }, slots: 4, terreno: "prado"},

  observatorio: { nome: "Observatório" , custo: { madeira: 5, pedra: 15 }, slots: 1, terreno: "prado"},

  //circulo_invocacao: { nome: "Círculo de Invocação", custo: { madeira: 5, pedra: 15 }, slots: 1, terreno: "prado"},

  //portal: { nome: "Portal de Mana", custo: { madeira: 15, pedra: 25 }, slots: 4, terreno: "prado"}
}
};
