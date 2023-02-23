'use strict'

import { produtos } from "./produtos.js"

const criarCard = (produto) =>{
    const card = document.createElement ('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card_image')
    img.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card_title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card_description')
    descricao.textContent = produto.description

    const preco = document.createElement('p')
    preco.classList.add('card_preco')
    preco.textContent = produto.price + " R$"


    card.append(img,titulo,descricao,preco)

    return card
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}

carregarProdutos()

/***********************************************************
const precos = [10,23,51,90]
const limite = precos.length

while (i<limite){
    precosFrete = [] + 2 // Mais dois de frete
    i++
}

console.log(precosFrete)
************************************************************/
/* *********************************************************
 const limite = precos.length
 const precosFrete = []

 for(let i = 0; i<limite ; i++){
     precosFrete[i] = precos[i]+2
 } 
 ***********************************************************/

 /***********************************************************
 const precos = [10,23,51,90]

 const adicionarFrete = (preco) => preco + 2
 const precosFrete = precos.map(adicionarFrete)

 console.log(adicionarFrete)

 ************************************************************/
/************************************************************
 * Essa Array tem duas posições e é composto por dois objetos
 * 
 * const alunos = [
 *   {
 *     nome: 'Gustavo',
 *      nota: 10,
 *       aprovado: true
 *   },
 *  {
 *      nome: 'Henrique',
 *       nota: 3,
 *      aprovado: false
 *   }
 *
 * ]
 * 
 * 
 * 
************************************************************/
