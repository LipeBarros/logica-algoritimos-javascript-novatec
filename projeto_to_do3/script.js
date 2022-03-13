
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {    
        var add = document.querySelector("#add");      
        add.click();    
    }
  });

const lista = document.getElementById("lista")

const tarefas = []

function incluiTarefa(){
    const tarefa = {
        nome: document.getElementById('nomeTarefa').value,
        pronto: false
    }

    tarefas.push(tarefa);
    document.getElementById('nomeTarefa').value = ''
    listaTarefas()
}

function deletaTarefa(i){
    tarefas.splice(i,1)
    listaTarefas()
}

function finalizaTarefa(i){
    tarefas[i].pronto = true
    document.getElementById(`t${i}`).classList.toggle('finalizada')
}


function listaTarefas(){
    const tamanho = tarefas.length
    lista.innerHTML = ''
    for(let i = 0; i<tamanho ; i++){
        lista.innerHTML += `
            <div class="tarefa" id="t${i}">
                <div>${tarefas[i].nome}</div>
                <button onclick="deletaTarefa(${i})">Delete</button>
                <button onclick="finalizaTarefa(${i})">Pronto</button>
            </div>`
    }
}

listaTarefas()