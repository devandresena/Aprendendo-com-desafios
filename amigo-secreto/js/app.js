//Incluir novo amigo
let primeiroCadastro = true;
function adicionar() {
    let novoNome = document.getElementById("nome-amigo").value;
    
    if (primeiroCadastro == true) {
        document.getElementById("lista-amigos").textContent += novoNome;
        primeiroCadastro = false;
    } else {
        document.getElementById("lista-amigos").textContent += `,${novoNome}`;
    }

}
//Sortear novo amigo
function sortear() {
    nomesSorteio = document.getElementById("lista-amigos").textContent.split(",");
    let presenteadoresSorteados = [];
    let presenteadosSorteados = [];
    let textoNomesSorteados = "";
    let numeroAleatorioPresenteador;
    let numeroAleatorioPresenteado;

    if (nomesSorteio.length < 2) {
        alert("Precisa de pelo menos 2 nomes para realizar sorteio!");
        return;
    }

    for (let i = 0; i < nomesSorteio.length; i++) {
        //Pessoa que vai dar o presente
        do {
            numeroAleatorioPresenteador = parseInt(Math.random() * nomesSorteio.length);
        } while (presenteadoresSorteados.includes(numeroAleatorioPresenteador));
        presenteadoresSorteados.push(numeroAleatorioPresenteador);

        //Pessoa que vai receber o presente
        do {
            numeroAleatorioPresenteado = parseInt(Math.random() * nomesSorteio.length);
            //Se for a última iteração e restar apenas o próprio nome, realiza sorteio novamente
            if (numeroAleatorioPresenteado == numeroAleatorioPresenteador && nomesSorteio.length == i + 1) {
                sortear();
                return;
            }
        } while (presenteadosSorteados.includes(numeroAleatorioPresenteado) || numeroAleatorioPresenteado == numeroAleatorioPresenteador);

        presenteadosSorteados.push(numeroAleatorioPresenteado);

        //Formata texto final
        textoNomesSorteados += `${nomesSorteio[numeroAleatorioPresenteador]} -> ${nomesSorteio[numeroAleatorioPresenteado]}<br>`;

    }
    document.getElementById("lista-sorteio").innerHTML = textoNomesSorteados;
}

function reiniciar() {
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    primeiroCadastro = true;
}