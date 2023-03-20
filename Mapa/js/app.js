'use strict'

import { getEstadoSelecionado } from './postman.js'
let estado = await getEstadoSelecionado('ac')
console.log(await estado)
//const mapa = document.querySelector('#map') OU
const mapa = document.querySelector('svg')
//Desintrusturação: O parametro ja vem da imagem svg, chamado event
const getEstado = ({target}) => {
    /****************************************
    const produto = {
        id: '12',
        descricao: 'teclado',
        quantidade: 23,
        tipo: 'Informatica'
    }
    const {target} = event
    // const id = produto.id
    // const quantidade = produto.quantidade
    const { id, quantidade } = produto
    *******************************************/
     const estado = target.id.replace('BR-', '')
     console.log(estado)
}

mapa.addEventListener('click', getEstado)