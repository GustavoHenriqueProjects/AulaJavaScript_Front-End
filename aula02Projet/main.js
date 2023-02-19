'use strict'

//Adicionando o botão do html na variavel adicionar
const adicionar = document.getElementById('add')

const adicionarCard = (recebeNomeAluno) => {

    //A constante container recebe a div container do html
    const container = document.getElementById('container')

    //A constante novaDiv cria uma nova div toda vez que a função adicionarCard for chamada
    const novaDiv = document.createElement('div')

    //A classe da nova div criada será aluno
    novaDiv.classList.add('aluno')

    //A novaDiv terá o titulo do nome digitado
    novaDiv.innerHTML = `<h2 class="aluno__title">${recebeNomeAluno} </h2>`

    //Todas as novasDivs criadas ficarão dentro da div Container
    container.appendChild(novaDiv)

    return 'teste'

}

const handleClick = () => {
    const nomeAluno = prompt('Digite seu nome: ')
    adicionarCard(nomeAluno)
}


adicionar.addEventListener('click', handleClick)

//SOLID - Responsibilidade unica
// FUNÇÕES Puras