function calcular(){
    let n1 = Number(document.getElementById("number1").value);
    let n2 = Number(document.getElementById("number2").value);

    let resposta = document.getElementById("Resultados");

    resposta.innerHTML = "soma = " + (n1 + n2);
    resposta.innerHTML += "<br>subtracao = " + (n1 - n2);
    resposta.innerHTML += "<br>divisao = " + (n1 / n2);
    resposta.innerHTML += "<br>multiplicação = " + (n1 * n2);
    resposta.innerHTML += "<br>resto = " + (n1 % n2);
    resposta.innerHTML += "<br>exponenciacao = " + (n1 ** n2);
}