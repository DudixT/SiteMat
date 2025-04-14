let respostaCorreta;
let pontuacao = 0;
let modoAtual = 'basico';


function iniciarJogo(modo) {
    modoAtual = modo;
    document.getElementById("area-jogo").style.display = "block";
    novaPergunta();
}


function novaPergunta() {
    const numeros = gerarNumeros(modoAtual);
    const operacao = escolherOperacao();
    const perguntaTexto = '${numeros.num1} ${operacao} ${numeros.num2}';

    respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operacao);

    document.getElementById("pergunta").innerText = perguntaTexto;
    
}