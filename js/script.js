function verificaParImpar(){
    //entrada
    let num = Number(document.getElementById("num").value)
    //processamento
    if (num % 2 == 0) {
        //saida verdadeira
    document.getElementById("resultado") .innerText ="o número" + num + "é par"
    } else{
    //saida falsa
    document.getElementById ("resultado").innerText ="O número" + num + "é ímpar"
    }
    
}

function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    
    let media = (nota1 + nota2 + nota3)/3;
    if (media > 6.0) {
    //saida aprovado
    document.getElementById("resultadomedia") .innerText ="" + media + "Aprovado"
    } else{
    //saida reprovado
    document.getElementById ("resultadomedia").innerText ="" + media + "Reprovado"
    }
    
}



function calcularRenda() {
    let renda = Number(document.getElementById("renda").value)
    let pessoa = Number(document.getElementById("pessoa").value)
    
    let percapita = (renda/pessoa);
    if (percapita <=1.500) {
    //saida aprovado
    document.getElementById("resultadomatri") .innerText ="" + percapita + "Pode se matricilar nos cursos"
    } else{
    //saida reprovado
    document.getElementById ("resultadomatri").innerText ="" + percapita + " Não pode se matricilar nos cursos, renda per capita maior que o permitido."
    }
    
}


function calcularXY() {
    let valorx = Number(document.getElementById("valorx").value)
    let valory = Number(document.getElementById("valory").value)
    
    let iguais = (valorx * valory)
    let diferentes = (valorx/valory)
    if (iguais % 2 == 0 ) {
    //saida aprovado
    document.getElementById("resultadoXY") .innerText ="" + iguais + "Multiplicar"
    } else{
    //saida reprovado
    document.getElementById ("diferentes").innerText ="" + diferentes + "Dividir"
    }
}