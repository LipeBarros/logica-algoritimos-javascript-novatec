const lista = document.getElementById("lista")
const tarefas = []

function criarTarefa(){
    const nome = document.getElementById("nomeTarefa").value

    const tarefa = {
        nome:nome,
        pronto: false
    }
    tarefas.push(tarefa)
    preencheLista()

    document.getElementById("nomeTarefa").value = ""
}

function finalizaTarefa(index){
    tarefas[index].pronto = true
    document.getElementById(`t${index}`).classList.toggle('finalizada')
    
}

function deletaTarefa(index){
    tarefas.splice(index,1)
    preencheLista()
}

function preencheLista(){
    const tamanho = tarefas.length
    lista.innerHTML = ''
    for(let i=0;i<tamanho;i++){
        lista.innerHTML += `
            <div class="tarefa" id='t${i}'>
                <div>${tarefas[i].nome}</div>
                <button onclick ='finalizaTarefa(${i})'>Pronto</button>
                <button onclick ='deletaTarefa(${i})'>Delete</button>
            </div>`
    }
}

