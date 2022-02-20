
let aprovados = [] 

function cadastrar(){
    const campoNome = document.getElementById("nome")
    const campoNota = document.getElementById("nota")
    const aluno = {
        nome: campoNome.value,
        nota: Number(campoNota.value),
    }

    aprovados.push(aluno)
    alert("Aluno cadastrado com sucesso.")
    campoNome.value = ''
    campoNota.value = ''
    campoNome.focus()
}


function gerarLista(){
    const tamanho = aprovados.length
    const lista = document.getElementById("lista");

    lista.innerHTML = ''

    for(let i = 0 ; i < tamanho ; i++){    
        if(aprovados[i].nota >= 5){
            lista.innerHTML += `<div class="aprovado">${aprovados[i].nome}  você foi aprovado! </div>`
        }
        else{
            lista.innerHTML += `<div class="reprovado">${aprovados[i].nome}  você foi reprovado! </div>`
        }
    }
}