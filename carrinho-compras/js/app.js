function adicionar() {
    let produtoSelecionado = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    if (quantidade == ""){
        alert("Por favor inclua a quantidade");
        return;
    }

    //Separa nome do produto e valor
    let produto;
    let valor;
    [produto, valor] = produtoSelecionado.split(" - ");

    //Cria nova section para incluir produto no carrinho
    let novoProduto = document.createElement("section");
    novoProduto.classList.add("carrinho__produtos__produto");

    //Cria span quantidade
    let novoProdutoQtd = document.createElement("span");
    novoProdutoQtd.classList.add("texto-azul");
    novoProdutoQtd.textContent = `${quantidade}x `;

    //Cria texto com nome do produto
    let textoProduto = document.createTextNode(`${produto} `);

    //Cria span com valor do produto
    let novoProdutoValor = document.createElement("span");
    novoProdutoValor.classList.add("texto-azul");
    novoProdutoValor.textContent = valor;

    //Adiciona todos os elementos na nova sextion
    novoProduto.appendChild(novoProdutoQtd);
    novoProduto.appendChild(textoProduto);
    novoProduto.appendChild(novoProdutoValor);

    //Resgata elemento carrinho e adiciona novo produto
    let carrinho = document.getElementById("lista-produtos");
    carrinho.appendChild(novoProduto);

    //Captura o valor de todos os produtos do carrinho para calcular valor total
    let todosProdutos = carrinho.getElementsByClassName("carrinho__produtos__produto");
    let valorTotal = 0;
    for (let i = 0; i < todosProdutos.length; i++) {
        let todosSpanProduto = todosProdutos[i].querySelectorAll("span");
        //!!!!!!!precisa multiplicar pela quantidade antes
        valorTotal = valorTotal + (parseInt(todosSpanProduto[0].textContent.replace("x", "")) * parseInt(todosSpanProduto[1].textContent.replace("R$", "")));
    }
    document.getElementById("valor-total").textContent = `R$${valorTotal}`;

    //Limpa seleção atual
    document.getElementById("produto").value = "Fone de ouvido - R$100";
    document.getElementById("quantidade").value = "";
}

function limpar() {
    document.getElementById("produto").value = "Fone de ouvido - R$100";
    document.getElementById("quantidade").value = "";
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$0";
}