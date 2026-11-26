
  const fisico= {
  vida:          { rotulo: "vida" },
  forca:         { rotulo: "força" },
  estabilidade:  { rotulo: "estabilidade" },
  stamina:       { rotulo: "stamina" },
  
  velocidade:    { rotulo: "velocidade" },
  resistencia:   { rotulo: "resistência" },
  flexibilidade: { rotulo: "flexibilidade" },
  fome: { rotulo: "fome" },
  
  idade: { rotulo: "idade" },
  peso: { rotulo: "peso" },
  altura: { rotulo: "altura" },
  expectativa: { rotulo: "expectativa de vida" },
},
  
  const mental= {
  mentalidade: { rotulo: "mentalidade" },
  inteligencia:    { rotulo: "inteligência" },
  desenvolvimento: { rotulo: "desenvolvimento" },
  temperamento: { rotulo: "temperamento"},
},
  
  const alma= {
  mana:    { rotulo: "mana" },
  consumo: { rotulo: "consumo de mana" },
}
};


const nomes = {
  humano: {
    feminino: ["Alice", "Beatriz", "Clara", "Diana", "Elena", "Flora", "Helena", "Isabela", "Julia", "Larissa", "Mariana", "Nina", "Ofélia", "Rafaela", "Sofia", "Valentina"],
    masculino: ["Arthur", "Bruno", "César", "Dante", "Enzo", "Felipe", "Gabriel", "Henrique", "Lucas", "Mateus", "Nicolas", "Otávio", "Pedro", "Rafael", "Samuel", "Thiago"],
    sobrenome: ["Almeida", "Alves", "Barbosa", "Cardoso", "Carvalho", "Castro", "Costa", "Dias", "Ferreira", "Gomes", "Lima", "Martins", "Melo", "Mendes", "Monteiro", "Moreira", "Nogueira", "Oliveira", "Pereira", "Ribeiro", "Rocha", "Rodrigues", "Santos", "Silva", "Sousa", "Teixeira"]
  },
  elfo: {
    feminino: ["Aeliana", "Althaea", "Arwen", "Caelynn", "Elenwe", "Faelwen", "Galadriel", "Illyria", "Lirael", "Luthien", "Miriel", "Naivara", "Sariel", "Sylphie", "Tauriel", "Vaela"],
    masculino: ["Aelar", "Alaric", "Arannis", "Caelum", "Elrond", "Faelar", "Fenian", "Galan", "Hadarai", "Legolas", "Laucian", "Mirthal", "Quarion", "Soveliss", "Thamior", "Varis"],
    sobrenome: ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Nailo", "Siannodel", "Xiloscient", "Alvorada", "Brisa-Prateada", "Folha-Verde", "Luz-Estelar", "Sombra-Lunar", "Vento-Suave"]
  },
  anao: {
    feminino: ["Adrik", "Berta", "Dagmar", "Dagna", "Helga", "Kilda", "Morga", "Runa", "Sigrid", "Thora", "Ulrica", "Valka"],
    masculino: ["Balin", "Bofur", "Bombur", "Din", "Dwalin", "Gimli", "Glain", "Kili", "Oin", "Thorin", "Thror", "Durin"],
    sobrenome: ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart", "Barba-de-Ferro", "Forja-Forte", "Martelo-de-Pedra"]
  },
  orc: {
    feminino: ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"],
    masculino: ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk", "Grom"],
    sobrenome: ["Crânio-Partído", "Dente-de-Ferro", "Fúria-Sangrenta", "Garra-Negra", "Lâmina-Cega", "Mão-Pesada", "Olho-Vermelho", "Pele-de-Pedra", "Presa-Quebrada", "Punho-de-Aço", "Quebra-Ossos", "Rugido-Trovão"]
  },
  halfling: {
    feminino: ["Amaryllis", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Rosie", "Seraphina", "Verna"],
    masculino: ["Alton", "Ander", "Bilbo", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Pippin", "Roscoe", "Wellby"],
    sobrenome: ["Bolseiro", "Bom-Barril", "Colina-Verde", "Escova-Espinho", "Folha-de-Chá", "Galho-Alto", "Garrafa-Cheia", "Pé-Leve", "Pé-Peludo", "Ponte-Alta", "Prado-Doce", "Sub-Colina", "Toca-Funda", "Ventre-Cheio"]
  }
};