function calcularIMC() {

    // Pegando os valores
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Validando campos
    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Digite valores válidos!";
        return;
    }

    // Calculando IMC
    let imc = peso / (altura * altura);

    // Classificação
    let classificacao = "";

    if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

    // Exibindo resultado
    document.getElementById("resultado").innerHTML =
        `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
}