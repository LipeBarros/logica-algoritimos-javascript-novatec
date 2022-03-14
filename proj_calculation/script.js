const campoCalculo = document.getElementById("calculo")
const campoResultado = document.getElementById("resultado")
let calculo = []
let calculoTemp = [""]

function incluiTecla(tecla){
    if(!isNumber(tecla) && calculo.length === 0) return

    if(!isNumber(tecla) && !isNumber(calculo[calculo.length-1])){
        calculo[calculo.length-1] = tecla
    }
    else if(isNumber(tecla) && isNumber(calculo[calculo.length-1])){
        const numero = `${calculo[calculo.length-1]}${tecla}`
        calculo[calculo.length-1] = Number(numero)
    }else{
        calculo.push(tecla)
    }
}

function isNumber(tecla){
    return !isNaN(tecla)
}


function digita(tecla){   
    incluiTecla(tecla);
    if(isNumber(tecla)) {
        calculoTemp = [...calculo];
        calcula()
    }
    else campoResultado.innerHTML = ""
    imprimiCalculo()
}

function calcula(){
    opera('*')
    opera('/')
    opera('+')
    opera('-')
}

function imprimiCalculo(){
    const tamanho = calculo.length
    campoCalculo.innerHTML = ""
    for(let i = 0; i<tamanho; i++){
        campoCalculo.innerHTML += calculo[i] 
    }
    campoResultado.innerHTML = calculoTemp[0];
}

function opera(sinal){   
    const index = calculoTemp.indexOf(sinal)
    if(index === -1) return;

    const num1 = calculoTemp[index -1]
    const num2 = calculoTemp[index +1]
    let resultado

    if(num1 && num2){

        switch(sinal){
            case '*': resultado = num1 * num2; break;
            case '/': resultado = num1 / num2; break;
            case '+': resultado = num1 + num2; break;
            case '-': resultado = num1 - num2; break;
        }
        
        calculoTemp[index -1] = resultado
        calculoTemp.splice(index,2)
    }

    calcula()
}   

function limpaDisplay(){
    campoCalculo.innerHTML = ""
    campoResultado.innerHTML = ""
    calculo = []
    calculoTemp = [""]
}

function resultado(){
    campoCalculo.innerHTML = campoResultado.innerHTML;
    calculo = [Number(campoResultado.innerHTML)]
    campoResultado.innerHTML = ''
}