'use strict' //Serve para auxiliar no desenvolvimento do códico, avisando erros

//Adicionando uma const que recebe o botão adicionar
const adicionar = document.getElementById('add')

//Função responsavel por adicionar o nome do aluno e a nota com validação
const adicionarCard = (aluno, nota) => {

    //const container recebe a classe container 
    const container = document.getElementById('container')

    //Criando uma nova div
    const novadiv = document.createElement('div')

    //Colocando uma classe para cada div criada
    novadiv.classList.add('list')

    if (Number(nota) > 10 || Number(nota) < 0) {
        window.alert("Atenção somete será aceito números entre 0 á 10")
        return false

    } else if (isNaN(nota)) {
        window.alert('Atenção somente será aceito número para a nota')
        return false

    } else if(Number(nota)<=5){

        //Colocando o nome do aluno para cada div criada
        novadiv.innerHTML = `<h2 class="aluno__title"> ${aluno} sua nota é ${nota}</h2>`

        novadiv.classList.add('vermelho')
        novadiv.classList.remove('verde')

    }else{

        //Colocando o nome do aluno para cada div criada
        novadiv.innerHTML = `<h2 class="aluno__title"> ${aluno} sua nota é ${nota}</h2>`

        novadiv.classList.add('verde')
        novadiv.classList.remove('vermelho')
    }

    //Colocando as novas divs dentro da div container
    container.appendChild(novadiv)

}

// Acionando uma função para reber o nome do aluno
const handleClick = () => {
    const nomeAluno = prompt('Digite seu nome: ')
    const nota = prompt('Digite sua nota: ')

    adicionarCard(nomeAluno, nota)

}

adicionar.addEventListener('click', handleClick)