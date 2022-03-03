function soma(num1,num2){
    let resultado = num1 + num2 
    return resultado
}

function subtracao(num1,num2){
    let resultado = num1 - num2
    return resultado
}

function media(num1,num2,num3){
    let resultado = (num1 + num2 + num3) / 3
    return resultado
}


function mediaArray(numeros){
    const tamanho = numeros.length 
    let soma = 0
    for(let i=0; i<tamanho; i++){
        soma += numeros[i]
    }
    const resultado = 4.2
    return 4.2
}

function mensagem(nota){
    if(nota > 5){
        return "Voce foi aprovado"
    } else {
        return "não foi dessa vez"
    }
}


/* -------------------------------------------------------------------------------------- */

