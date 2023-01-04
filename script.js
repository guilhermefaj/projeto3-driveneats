//Primeiro, escolha seu prato ---------------------------------------

function escolherFrango() {
    document.getElementById("frango").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("veg").style.borderColor = "white";

    document.getElementById("frangoicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("carneicon").style.color = "white"
    document.getElementById("vegicon").style.color = "white"
}

function escolherCarne() {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("veg").style.borderColor = "white";

    document.getElementById("frangoicon").style.color = "white"
    document.getElementById("carneicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("vegicon").style.color = "white"
}

function escolherVeg() {
    document.getElementById("frango").style.borderColor = "white";
    document.getElementById("carne").style.borderColor = "white";
    document.getElementById("veg").style.borderColor = "rgba(50, 183, 47, 1)";

    document.getElementById("frangoicon").style.color = "white"
    document.getElementById("carneicon").style.color = "white"
    document.getElementById("vegicon").style.color = "rgba(50, 183, 47, 1)"
}

//Agora, sua bebida ---------------------------------------

function escolherCoca() {
    document.getElementById("coca").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("refresco").style.borderColor = "white";

    document.getElementById("cocaicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("sucoicon").style.color = "white"
    document.getElementById("refrescoicon").style.color = "white"
}

function escolherSuco() {
    document.getElementById("coca").style.borderColor = "White";
    document.getElementById("suco").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("refresco").style.borderColor = "white";

    document.getElementById("cocaicon").style.color = "White"
    document.getElementById("sucoicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("refrescoicon").style.color = "white"
}

function escolherRefresco() {
    document.getElementById("coca").style.borderColor = "White";
    document.getElementById("suco").style.borderColor = "white";
    document.getElementById("refresco").style.borderColor = "rgba(50, 183, 47, 1)";

    document.getElementById("cocaicon").style.color = "White"
    document.getElementById("sucoicon").style.color = "white"
    document.getElementById("refrescoicon").style.color = "rgba(50, 183, 47, 1)"
}

//Por fim, sua sobremesa ---------------------------------------

function escolherPudim() {
    document.getElementById("pudim").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("sorvete").style.borderColor = "white";
    document.getElementById("torta").style.borderColor = "white";

    document.getElementById("pudimicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("sorveteicon").style.color = "white"
    document.getElementById("tortaicon").style.color = "white"
}

function escolherSorvete() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "rgba(50, 183, 47, 1)";
    document.getElementById("torta").style.borderColor = "white";

    document.getElementById("pudimicon").style.color = "white"
    document.getElementById("sorveteicon").style.color = "rgba(50, 183, 47, 1)"
    document.getElementById("tortaicon").style.color = "white"
}

function escolherTorta() {
    document.getElementById("pudim").style.borderColor = "white";
    document.getElementById("sorvete").style.borderColor = "white";
    document.getElementById("torta").style.borderColor = "rgba(50, 183, 47, 1)";

    document.getElementById("pudimicon").style.color = "white"
    document.getElementById("sorveteicon").style.color = "white"
    document.getElementById("tortaicon").style.color = "rgba(50, 183, 47, 1)"
}