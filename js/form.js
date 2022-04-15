var adicionarPaciente = document.querySelector("#adicionar-paciente");
adicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibirErros(erros);
        return;
    }

    adicionaPacienteTabela(paciente);

    form.reset();
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
});

function adicionaPacienteTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    return paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, nomeClasse) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(nomeClasse);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0)
        erros.push("Nome do paciente não pode ser vazio!");

    if (!validaPeso(paciente.peso))
        erros.push("Peso do paciente inválido!");

    if (!validaAltura(paciente.altura))
        erros.push("Altura do paciente inválida!");

    if (paciente.peso.length == 0)
        erros.push("Peso do paciente não pode ser vazio!");

    if (paciente.altura.length == 0)
        erros.push("Altura do paciente não pode ser vazia!")

    if (paciente.gordura.length == 0)
        erros.push("O % de gordura do paciente não pode ser vazio!");

    return erros;
}

function exibirErros(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}