function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!peso || !altura) {
        document.getElementById("resultado").innerText = "Digite valores válidos!";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade Grau I";
    else if (imc < 39.9) classificacao = "Obesidade Grau II";
    else classificacao = "Obesidade Grau III";

    document.getElementById("resultado").innerHTML = `
        Seu IMC é <strong>${imc}</strong><br>
        Classificação: <strong>${classificacao}</strong>
    `;
}
