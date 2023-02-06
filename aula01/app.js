'use strict' // Policiame, USE STRICT ajuda a contruir um código limpo

const calcular = document.getElementById('calcular')

function somar() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const formulario = document.getElementById('form')

    let situacao = document.getElementById('situacao')
    situacao.value = (nota1 + nota2)/2


    if((nota1+nota2)/2 > 5){
        formulario.classList.add('verde')
        formulario.classList.remove('vermelho')

    }else{
        formulario.classList.add('vermelho')
        formulario.classList.remove('verde')
    }
    
}

calcular.addEventListener('click', somar)