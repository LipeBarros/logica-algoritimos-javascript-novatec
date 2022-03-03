const dadosCadastrais = {
    nome:'Felipe',
    identidade:34567,
    endereco:'rua pricipal',
    cpf:74784939030,
    aprovado:false,
    prova1: 7,
    prova2:9
}

const media = (dadosCadastrais.prova1 + dadosCadastrais.prova2) / 2

if(media > 5){
    dadosCadastrais.aprovado = true
}


if(dadosCadastrais.aprovado){
    console.log(`${dadosCadastrais.nome}, você foi aprovado`)
}else{
    console.log(`${dadosCadastrais.nome}, você foi reprovado`)
}

console.log(dadosCadastrais)