let alunos = []

function calculaMedia(num1, num2){
    const resultado = (num1 + num2) / 2
    return resultado
}

function limpaCampos(){
    document.getElementById("nomeAluno").value = ""
    document.getElementById("primeiraNota").value = ""
    document.getElementById("segundaNota").value = ""
    document.getElementById("nomeAluno").focus()
}


function cadastrar(){
    const nomeAluno = document.getElementById("nomeAluno").value;
    const primeiraNota = Number(document.getElementById("primeiraNota").value);
    const segundaNota = Number(document.getElementById("segundaNota").value);
    const media = calculaMedia(primeiraNota, segundaNota)

    const aluno = {
        nome: nomeAluno,
        nota1: primeiraNota,
        nota2: segundaNota,
        media: media,
    }

    alunos.push(aluno);
    alert("Aluno cadastrado com sucesso.")
    limpaCampos()
}

function gerarLista(){
    const lista = document.getElementById("lista");
    const tamanho = alunos.length

    lista.innerHTML = ""

    for(let i=0; i<tamanho; i++){
        if(alunos[i].media >= 5){
            lista.innerHTML += ` <div class="aprovado">${alunos[i].nome} você foi aprovado. Média: ${alunos[i].media}</div>`
        }
        else{
            lista.innerHTML += ` <div class="reprovado">${alunos[i].nome} você foi reprovado. Média: ${alunos[i].media}</div>`
        }
    }
}
