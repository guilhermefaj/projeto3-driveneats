//Primeiro, escolha seu prato ---------------------------------------

let escolhaPrato = 0;
let escolhaBebida = 0;
let escolhaSobremesa = 0;

let soma = (escolhaPrato + escolhaBebida + escolhaSobremesa);

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

let total = (valorPrato + valorBebida + valorSobremesa);

let prato;

function escolherFrango() {
    document.getElementById("frango").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("veg").style.borderColor = "white";

    document.getElementById("frangoicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("carneicon").style.color = "white"
    document.getElementById("vegicon").style.color = "white"

    prato = "Frango";
    escolhaPrato = 1;
    valorPrato = 14.90;
}

function escolherCarne() {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("veg").style.borderColor = "white";

    document.getElementById("frangoicon").style.color = "white"
    document.getElementById("carneicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("vegicon").style.color = "white"

    prato = "Carne";
    escolhaPrato = 1;
    valorPrato = 19.90;
}

function escolherVeg() {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("veg").style.borderColor = "rgba(50, 183, 47, 1)";

    document.getElementById("frangoicon").style.color = "white"
    document.getElementById("carneicon").style.color = "white"
    document.getElementById("vegicon").style.color = "rgba(50, 183, 47, 1)"

    prato = "vegetariano";
    escolhaPrato = 1;
    ValorPrato = 18.90;
}

//Agora, sua bebida ---------------------------------------

let bebida;

function escolherCoca() {
    document.getElementById("coca").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("refresco").style.borderColor = "white";

    document.getElementById("cocaicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("sucoicon").style.color = "white"
    document.getElementById("refrescoicon").style.color = "white"

    bebida = "Coca";
    escolhaBebida = 1;
    valorBebida = 4.90;
}

function escolherSuco() {
    document.getElementById("coca").style.borderColor = "White";
    document.getElementById("suco").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("refresco").style.borderColor = "white";

    document.getElementById("cocaicon").style.color = "White"
    document.getElementById("sucoicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("refrescoicon").style.color = "white"

    bebida = "Suco";
    escolhaBebida = 1;
    valorBebida = 5.50;
}

function escolherRefresco() {
    document.getElementById("coca").style.borderColor = "White";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("refresco").style.borderColor = "rgba(50, 183, 47, 1)";

    document.getElementById("cocaicon").style.color = "White"
    document.getElementById("sucoicon").style.color = "white"
    document.getElementById("refrescoicon").style.color = "rgba(50, 183, 47, 1)"

    bebida = "Refresco";
    escolhaBebida = 1;
    valorBebida = 3.90;
}

//Por fim, sua sobremesa ---------------------------------------

let sobremesa;

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("sorvete").style.borderColor = "white";
    document.getElementById("torta").style.borderColor = "white";

    document.getElementById("pudimicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("sorveteicon").style.color = "white"
    document.getElementById("tortaicon").style.color = "white"

    sobremesa = "Pudim";
    escolhaSobremesa = 1;
    valorSobremesa = 8.90;
}

function escolherSorvete() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("torta").style.borderColor = "white";

    document.getElementById("pudimicon").style.color = "white"
    document.getElementById("sorveteicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("tortaicon").style.color = "white"

    sobremesa = "Sorvete";
    escolhaSobremesa = 1;
    valorSobremesa = 6.90;
}

function escolherTorta() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "white";
    document.getElementById("torta").style.borderColor = "rgba(50, 183, 47, 1)";

    document.getElementById("pudimicon").style.color = "white"
    document.getElementById("sorveteicon").style.color = "white"
    document.getElementById("tortaicon").style.color = "rgba(50, 183, 47, 1)"

    sobremesa = "Torta";
    escolhaSobremesa = 1;
    valorSobremesa = 7.90;
}

function finalizarPedido() {
    if (escolhaPrato == 1 && escolhaBebida == 1 & escolhaSobremesa == 1) {
        document.getElementById("botaoFinalizar").style.backgroundColor = "rgba(50, 183, 47, 1)"
        document.getElementById("botaoFinalizar").textContent = "Finalizar Pedido"
        document.getElementById("botaoFinalizar").style

        var habilitar = document.querySelector("#botaoFinalizar");
        console.log(habilitar);
        habilitar.disabled = false;
    }
}

function somarPedidos() {
    total = (valorPrato + valorBebida + valorSobremesa);
    totalArredondado = parseFloat(total.toFixed(2));
}

function enviarMensagem() {
    let mensagem;

    mensagem = "Oi, DrivenEats! Gostaria de fazer o pedido: \n" + "  • Prato: " + prato + "\n" + "  • Bebida: " + bebida + "\n" + "  • Sobremesa: " + sobremesa + "\n" + "Total: R$ " + totalArredondado + "0";

    mensagem = window.encodeURIComponent(mensagem);

    window.open("https://wa.me/+5535997014782?text=" + mensagem);
}