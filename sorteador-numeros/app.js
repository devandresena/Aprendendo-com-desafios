function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de >= ate) {
        alert("Número 'De' é maior ou igual que 'Até', tente novamente");
        reiniciar();
        return;
    }
    
    alert(quantidade+" > "+((ate - de) + 1));
    if (quantidade > ((ate - de) + 1)) {
        alert("A quantidade de possibilidades é menor que a quantidade escolhida, diminua a quantidade ou escolha 'De' e 'Até' com um número maior de possibilidades");
        reiniciar();
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, (ate+1));
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    document.getElementById("btn-reiniciar").classList.replace("container__botao-desabilitado", "container__botao");
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    let btnReiniciar = document.getElementById("btn-reiniciar")

    if (btnReiniciar.classList.contains("container__botao")) {
        btnReiniciar.classList.replace("container__botao", "container__botao-desabilitado");
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}