function comprar() {
    //Quantidade ingressos escolhida
    let quantidadeDesejada = parseInt(document.getElementById("qtd").value);

    //Tipo de ingresso
    let valueTipoIngresso = document.getElementById("tipo-ingresso").value;

    //Quantidades ingressos disponiveis
    let qtdDisponivelInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    let qtdDisponivelSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let qtdDisponivelPista = parseInt(document.getElementById("qtd-pista").textContent);

    //Verifica se existem ingressos disponiveis
    if (valueTipoIngresso == "inferior") {
        if (quantidadeDesejada <= qtdDisponivelInferior){
            qtdDisponivelInferior = qtdDisponivelInferior - quantidadeDesejada;
            document.getElementById("qtd-inferior").textContent = qtdDisponivelInferior;
        }else{
            alert("Quantidade de ingressos não disponível");
        }
    } else if (valueTipoIngresso == "superior") {
        if (quantidadeDesejada <= qtdDisponivelSuperior){
            qtdDisponivelSuperior = qtdDisponivelSuperior - quantidadeDesejada;
            document.getElementById("qtd-superior").textContent = qtdDisponivelSuperior;
        }else{
            alert("Quantidade de ingressos não disponível");
        }
    } else if (valueTipoIngresso == "pista") {
        if (quantidadeDesejada <= qtdDisponivelPista){
            qtdDisponivelPista = qtdDisponivelPista - quantidadeDesejada;
            document.getElementById("qtd-pista").textContent = qtdDisponivelPista;
        }else{
            alert("Quantidade de ingressos não disponível");
        }
    }
}