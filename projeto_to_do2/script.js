/* -----------------Dados--------------------- */


const tarefas = [
    {
        nome:"fazer faxina",
        pronto:false
    },
    {
        nome:"comprar doguinho",
        pronto:false
    },
    {
        nome:"parar de enrolaçao",
        pronto:false
    }
]

const novaTarefa = {
    nome:"Mandar escrever só para mandar apagar",
    pronto: false
}

/*--------------------Funçoes-----------------------*/




function incluiTarefa(tarefa){
    tarefas.push(tarefa)
}

function deletaTarefa(i){
    tarefas.splice(i,1)
}

function finalizaTarefa(i){
    tarefas[i].pronto = true
}
const index = 2
/*-------------------Programa----------------*/


incluiTarefa(novaTarefa)
deletaTarefa(index)
finalizaTarefa(index)
console.log(tarefas)


