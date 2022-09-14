const nome = document.getElementById('nomeInput');
const agencia = document.getElementById('ageInput');
const conta = document.getElementById('contaInput');
const poupanca = [];
const corrente = [];



tipoValue = function () {
    let selecionado = document.getElementsByName('radiosConta');

    for (i = 0; i < selecionado.length; i++) {
        if (selecionado[i].checked)
            tipo = selecionado[i].value;
    }
    return tipo;
}

class Conta {
    constructor() {
        this.tipo = tipoValue();
        this.nome = nome.value;
        this.agencia = agencia.value;
        this.conta = conta.value;
    }

    card = function () {
        let card = "";

        if (this.tipo == "Poupanca") {

            card = '<div id="poupancaCard"  class="cardPoupanca card col-md-3">';
        } else {
            card = '<div id="caorrenteCard"  class="cardCorrente card col-md-3">';
        }

        card +=
            '<p><span>Nome: </span>' + this.nome + '</p>' +
            '<p><span>Agência: </span>' + this.agencia + '</p>' +
            '<p><span>Conta: </span>' + this.conta + '</p>' +
            '</div>';
        return card;
    }



}

cadastrar = function () {
    if (nome.value == "" || agencia.value == "" || conta.value == "") {
        semPreencher();
    } else {

        if (tipoValue() == "Poupanca") {
            poupanca.push(new Conta());
            exibir(poupanca);
            console.log(poupanca);
        } else {
            corrente.push(new Conta());
            exibir(corrente);
            console.log(corrente);
        }
        preenchido();
        limpar();

    }


}

exibir = function (array) {
    let localC = document.getElementById('poupanca');
    let localP = document.getElementById('corrente');
    let card = "";
    for (let i = 0; i < array.length; i++) { card += array[i].card(); }

    if (tipoValue() == "Poupanca") {
        localC.innerHTML = card;
    } else {
        localP.innerHTML = card;
    }
}





// ---------------------------------------------
const h1 = document.querySelector('.help1');
const h2 = document.querySelector('.help2');
const h3 = document.querySelector('.help3');
semPreencher = function () {
    let texto = "*Obrigatório";
    h1.innerHTML = texto;
    h1.classList.add('erro');
    h2.innerHTML = texto;
    h2.classList.add('erro');
    h3.innerHTML = texto;
    h3.classList.add('erro');
}

preenchido = function () {
    h1.innerHTML = "";
    h1.classList.remove('erro');
    h2.innerHTML = "";
    h2.classList.remove('erro');
    h3.innerHTML = "";
    h3.classList.remove('erro');
}
limpar = function () {
    return document.getElementById('formulario').reset();
}


