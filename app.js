let listaNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementos = listaNumerosSorteados.length;

    if(qtdElementos == numeroLimite){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 100:');
}

exibirMensagemInicial()

function verificarChute(){
   let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){

        exibirTexto('h1', 'Você Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
       } 
        else {
            if(chute < numeroSecreto){
                exibirTexto('h1',`O número secreto é maior que ${chute} !`)
        }else{
            exibirTexto('h1',`O número secreto é menor que ${chute} !`)
        }
        tentativas++
        limparCampo()
    }

   }

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    console.log(numeroSecreto)
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial()
   document.getElementById('reiniciar').setAttribute('disabled', true)
}



