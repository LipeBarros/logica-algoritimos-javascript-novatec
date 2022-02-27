const alunos = []

function calcularMedia(num1,num2){
    const resultado = (num1 + num2) / 2
    return resultado
}

function validaCampos(){
    if(document.getElementById("nomeAluno").value === "" ){
        alert("Preencha o campo com nome do aluno.")
        return false
    }else if(document.getElementById("primeiraNota").value === ""){
        alert("Preencha a primeira nota.")
        return false
    }else if(document.getElementById("segundaNota").value === ""){
        alert("Prencha a segunda nota.")
        return false
    }else{
        return true
    }
    
}

function limpaCampos(){
    document.getElementById("nomeAluno").value = ""
    document.getElementById("primeiraNota").value = ""
    document.getElementById("segundaNota").value = ""
    document.getElementById("nomeAluno").focus()
    
}

function cadastrar(){
    const nomeAluno = document.getElementById("nomeAluno").value
    const primeiraNota = Number(document.getElementById("primeiraNota").value)
    const segundaNota = Number(document.getElementById("segundaNota").value)
    const media = calcularMedia(primeiraNota , segundaNota)
    
    const eValido = validaCampos()

    if(!eValido){
        return false
    }
    
    const aluno = {
        nomeAluno: nomeAluno,
        primeiraNota: primeiraNota,
        segundaNota: segundaNota,
        media:media,
    }

    alunos.push(aluno)

    limpaCampos()
}

function gerarLista(){
    const tamanho = alunos.length
    const lista = document.getElementById("lista")

    lista.innerHTML = ""

    for(let i=0; i<tamanho; i++){
        if(alunos[i].media > 5){
            lista.innerHTML += `<div class="aprovado">${alunos[i].nomeAluno} você foi aprovado.Sua média é ${alunos[i].media}.</div>`
        }
        else{
            lista.innerHTML += `<div class="reprovado">${alunos[i].nomeAluno} você foi reprovado.Sua média é ${alunos[i].media}</div>`
        }
    }
}