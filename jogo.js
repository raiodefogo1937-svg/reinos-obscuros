

const jogo = {
	minutos: 6 * 60,
	};

function passarTempo(minutos) {
  jogo.minutos += minutos;
}

setInterval(function () {
  passarTempo(2);      // 2 minutos do jogo a cada 1 segundo real
}, 1000);

//mudar
jogo.reinos = { valdoria: criarReino("Valdoria") };
jogo.reinoAtual = "valdoria";
