const carrosVelhos = ['fusca','brasilia','variante']


carrosVelhos.push('voyage')  
carrosVelhos.push('UNO')  
carrosVelhos.push('jeep')  
carrosVelhos.push('coro')  
carrosVelhos.push('civic')  
const novo = 'gol'

carrosVelhos.push(novo)


console.log(`O nome do carro é ${carrosVelhos[0]}`)
console.log(`O nome do carro é ${carrosVelhos[1]}`)
console.log(`O nome do carro é ${carrosVelhos[2]}`)
console.log(`O nome do carro é ${carrosVelhos[3]}`)
console.log(`O nome do carro é ${carrosVelhos[4]}`)

const quantCarros = carrosVelhos.length

console.log(`Tem ${quantCarros} carros na lista `)


carrosVelhos.forEach(  carro => {
    console.log(`O nome do carro é ${carro}`)
} )
