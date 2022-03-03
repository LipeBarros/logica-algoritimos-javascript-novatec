const numeros = [5,4,1]

const tamanho = numeros.length

let soma = 0

for(let i=0; i<tamanho; i++){
    soma = soma + numeros[i]
}

let media = soma / numeros.length

console.log(`Sua media é ${media}`)