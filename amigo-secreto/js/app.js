let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(amigos.includes(amigo.value.toUpperCase())){
        alert("O nome digitado já existe, digite um nome diferente.");
        amigo.value = '';
        return;
    }else if (amigo.value == ""){
        alert("O nome não pode estar vazio.");
        amigo.value = '';
        return;
    }
    else{
        amigos.push(amigo.value.toUpperCase());
    }

    if (lista.textContent == '') {
        lista.textContent = amigo.value.toUpperCase();
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value.toUpperCase();
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4){
        alert("Para realizar o sorteio, você precisa de pelo menos 4 amigos.");
        return
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}