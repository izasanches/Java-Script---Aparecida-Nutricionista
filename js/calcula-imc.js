var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdImc = pacientes[i].querySelector(".info-imc");


    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pacientes[i].classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        valorValido = false;
        pacientes[i].classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        tdImc.textContent = calculaIMC(peso, altura);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function calculaIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}