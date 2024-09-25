function verificaParImpar(){
    //entrada
    let num = Number(document.getElementById("num").value)
    //processamento
    if (num % 2 == 0) {
        //saida verdadeira
    document.getElementById("resultado") .innerText ="o número" + num + " é par"
    } else{
    //saida falsa
    document.getElementById ("resultado").innerText ="O número" + num + " é ímpar"
    }
    
}

function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    
    let media = (nota1 + nota2 + nota3)/3;
    if (media > 6.0) {
    //saida aprovado
    document.getElementById("resultadomedia") .innerText ="" + media + " Aprovado"
    } else{
    //saida reprovado
    document.getElementById ("resultadomedia").innerText ="" + media + " Reprovado"
    }
    
}


function verificarRenda() {
    
    let rendaFamiliar = Number(document.getElementById("rendaFamiliar").value);
    let numeroMembros = Number(document.getElementById("numeroMembros").value);

    const criterio = 2118.00;
    // Calcular a renda per capita
    let rendaPerCapita = rendaFamiliar / numeroMembros;
        
    if (rendaPerCapita <= criterio) {
        document.getElementById("resultadoren").innerText = "A renda per capita é R$" + rendaPerCapita + " Você pode se matricular."
    } else {
        document.getElementById("resultadoren").innerText = "A renda per capita é R$" + rendaPerCapita + " você possuir uma renda maior que o permitido para se matricular ."

    }
}


function calcularXY() {

    let x = Number(document.getElementById("valorx").value);
    let y = Number(document.getElementById("valorY").value);

    // Verificar se x é igual a y
    let resultadoXY;
    if (x === y) {
        resultadoXY = x * y;
        document.getElementById("resultadoXY").innerText ="Como X e Y são iguais, o resultado é X * Y = " + resultadoXY + ""
    } else {
        if (y === 0) {
            document.getElementById("resultadoXY").innerText = "Divisão por zero não é permitida.";
        } else {
            resultadoXY = x / y;
            document.getElementById("resultadoXY").innerText ="Como X e Y são diferentes, o resultado é X / Y = " + resultadoXY + ""
        }
    }
}

function calcularPesoIdeal() {

    let altura = Number(document.getElementById("altura").value);
    let sexo = document.getElementById("sexo").value;

    // Calcular o peso ideal com base no sexo
    let pesoIdeal;
    if (sexo === "masculino") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
        pesoIdeal = (62.1 * altura) - 44.7;
    }

    document.getElementById("resultadoideal").innerText = "O peso ideal é "+ pesoIdeal+ "kg"
}

