'use strict' //te avisar caso comenta erro no codigo

//Adicionando o botão do html na variavel adicionar
const adicionar = document.getElementById('add')

//adicionar um evento




//const adicionarCard = () => {
    //alert('Ola, mundo!')
    //const container = document.getElementById('container')
        // const container = document.querySelector('container ')
        // container.textContent = "Guilherme"

    //container.innerHTML = " <button>Guilheme </button>"
    //container.innerHTML += '<div class="items"></div>' // adiciona um quadrado ao clicar no bitton
        //innerHTML -> adicionar no html



//}


const adicionarCard = (aluno) => {

    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')

    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno} </h2>`

    container.appendChild(novaDiv)

    return 'teste'

}

// function adicionarCard() {
//     alert("olá mundo")
// }

const handleClick = () => {
    const nomeAluno = prompt('Digite seu nome: ')
    adicionarCard(nomeAluno)
}


adicionar.addEventListener('click', handleClick)
//adicionar.addEventListener('click', () => adicionarCard("FERNANDA"))

//SOLID - Responsibilidade unica
// FUNÇÕES Puras