 /* *********************************************************************************
  * 'use strict' Policiame o meu código, ex: Não posso usar variaveis não declaradas:
  *      a = 1 está errado.
  *  let a = 1 está certo
  ***********************************************************************************/
'use strict'

//Criando uma variavel const como referência para o botão
const adicionar = document.getElementById('add')

const adicionarCard = () => {

    //A variavel container recebe a referência da classe container
    const container = document.getElementById('container')

    //criando uma nova div toda vez que for clicado no botão
    const novaDiv = document.createElement('div')

    //Colocando as divs dentro da div container quando for clicado no botão
    container.appendChild(novaDiv)

    //Dando o nome da classe ="items" para cada div criada
    novaDiv.classList.add('items')

}

adicionar.addEventListener('click', adicionarCard)