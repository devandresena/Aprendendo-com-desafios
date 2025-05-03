function alterarStatus(item){
    let game = document.getElementById(`game-${item}`);
    let imagem = game.querySelector("dashboard__item__img");
    let botao = game.querySelector("dashboard__item__button");

    if(imagem.classList.contains("dashboard__item__img--rented") && botao.classList.contains("dashboard__item__button--return") && botao.innerHTML == "Devolver"){
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return")
        botao.innerHTML = "Devolver";
    }
}