//Array de números
const listaNumeros = [1,2,3,4,5,6,7,8,9,10]

//Filter é utilizado como função de callback para filtar na array o que desejo
const pares = listaNumeros
.filter((index) => index === 0)
.map((numeroPar) => numeroPar*1)

console.log(pares)

// map é usado para pegar as informações da arrar pares e me devolver uma nova Array com o resultado
//const resultadoMult = pares.map((numeroPar) => numeroPar*2)
