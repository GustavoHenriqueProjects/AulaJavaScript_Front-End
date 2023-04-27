'use strict'

const routes = {
    '/': '/pages/home.html',
    '/vermelho' : '/pages/vermelho.html',
    '/azul' : '/pages/azul.html',
    '/verde' : '/pages/verde.html'
}

const route = async () => {
    //Ouve o evento e cortar a ação do link
    window.event.preventDefault()
    window.history.pushState({},"", window.event.target.href)//Muda o endereço
    // console.log(window.event.target.href)//Endereço de link
    
    //Pega somente a rota depois do endereço
    const path = window.location.pathname
    const route = routes[path]
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html
    console.log(html)
}

//Quando o html nao encherga a função é nessesario tornará global: window.route = route
window.route = route