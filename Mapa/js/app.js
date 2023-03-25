'use strict'

import { getEstadoSelecionado } from './endPointDadosEstado.js'
import { getCidadesDoEstado } from './endPointCidades.js'

const filloutInfoCard = ($estadoSelecionado, $cidadesDoEstado) => {

    let estadoSelecionado = $estadoSelecionado
    let cidadesDoEstado = $cidadesDoEstado
    if(estadoSelecionado.uf != undefined){
        document.getElementById('uf').innerHTML = estadoSelecionado.uf
        document.getElementById('title-uf').innerHTML = estadoSelecionado.descricao
        document.getElementById('answer-capital').innerHTML = estadoSelecionado.capital
        document.getElementById('answer-local').innerHTML = estadoSelecionado.regiao
        const cardCidades = document.getElementById('allnamescitys')
        cardCidades.innerHTML = '' //Essa String vazia remove todos os elementos filhos do html, limpa as informações.
        cidadesDoEstado.cidades.forEach(element => {
            const cidades = document.createElement('p')
            cidades.classList.add('cidades')
            cidades.innerHTML = element
            cardCidades.append(cidades)
        });
    }
}


//const mapa = document.querySelector('#map') OU
const mapa = document.querySelector('svg')
//Desintrusturação: O parametro ja vem da imagem svg, chamado event
const getEstado = async ({target}) => {
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
   //A propriedade target retorna o elemento HTML em que o evento foi acionado
   if(target.id != 'map'){
    const estado = target.id.replace('BR-', '')
    //console.log(estado)

    const estadoSelecionado = await getEstadoSelecionado(estado)
    //console.log(estadoSelecionado)

    const cidadesDoEstado = await getCidadesDoEstado(estado)
   // console.log(cidadesDoEstado)

   filloutInfoCard(estadoSelecionado, cidadesDoEstado)
   }
    
}

mapa.addEventListener('click', getEstado)