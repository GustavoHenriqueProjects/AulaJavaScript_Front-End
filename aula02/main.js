'use strict'

//Criando uma variavel const como referencia para o botão
const adicionar = document.getElementById('add')

/*
 *  function adicionarCard(){
 *     alert('Olá Mundo!')
 *   }
 *  
*/

/*

   const adicionarCard = () => {
    //const container = document.querySelector('container')
   const container = document.getElementById('container')

    //Conteudo da tag
    //container.textContent = "Gustavo"
    //Mantem o conteudo atual mais o que to colocando
    container.innerHTML += '<div class="items"></div>'
}
*/

const adicionarCard = () => {

    //A variavel container revebe a referencia da classe container
    const container = document.getElementById('container')

    //criando uma nova div toda vez que for clicado no botão
    const novaDiv = document.createElement('div')

    //Colocando a divs dentro da div container qunado for clicado o botão
    container.appendChild(novaDiv)

    //Dando o novo de classe ="items" para cada div criada
    novaDiv.classList.add('items')


}

adicionar.addEventListener('click', adicionarCard)