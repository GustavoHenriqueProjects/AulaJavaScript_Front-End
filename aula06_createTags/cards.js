/*****************************************************************************************************************
 * 'USE STRICT'
 *Impede o uso de variáveis não declaradas.
 *Impede a reatribuição de propriedades somente leitura ou a exclusão de propriedades não excluíveis de um objeto.
 *Impede o uso do operador 'delete' em variáveis, funções ou argumentos de função.
 *Impede o uso de palavras reservadas como nomes de variáveis ou parâmetros de função.
 *Impede a duplicação de nomes de parâmetros em uma função.
 *****************************************************************************************************************/
'use strict'

//Classe card cria elementos html personalizados
/****************************************************************************************************************
 * class card extends HTMLElement: define uma nova classe card que estende a classe HTMLElement. 
 * Isso significa que card é uma classe personalizada que pode ser usada para criar elementos HTML
 * personalizados, card herda todas a propriedades do HTMLElement.
 * 
 * HTMLElement é a classe pai que representa um Elemento HTML.
 ****************************************************************************************************************/
class card extends HTMLElement{

    /*************************************************************************************************************
     * constructor(): É o construtor da classe card. O construtor é uma função que é chamada 
     * automaticamente quando um novo objeto é criado a partir da classe. Ele é usado para inicializar
     * as propriedades do objeto.
     * 
     * Super() inicializa as propriedades da classe pai que o contrutor innicializa as propriedades especificas da 
     * classe filha nesse caso card.
     * **********************************************************************************************************/  
      constructor(){

        /********************************************************************************************************
         * super(): chama o construtor da classe pai, HTMLElement, para inicializar a instância
         * da classe card. Isso garante que as propriedades e métodos da classe pai sejam herdados
         * corretamente pela classe card.
         * 
         *  Ao chamar super() dentro do construtor da classe card, estamos chamando o construtor da
         *  classe pai HTMLElement, que inicializa as propriedades e métodos da classe card que são
         *  herdados da classe pai
         * 
         *******************************************************************************************************/
        super()
        //const shadow = this.attachShadow({mode:'open'});

        
        /******************************************************************************************************
         * this.shadow = this.attachShadow({mode:'open'}) é uma linha de código que cria uma sombra
         *  para o elemento card usando o método attachShadow(). A sombra é um espaço reservado 
         * dentro do elemento onde você pode adicionar elementos filho e estilos que não afetarão a 
         * página principal. O parâmetro {mode: 'open'} indica que a sombra pode ser acessada e 
         * manipulada por scripts do lado de fora do elemento.
         ******************************************************************************************************/
        this.shadow = this.attachShadow({mode:'open'});

        // Nome, Foto e Cor são propriedades que podem ser personalizadas, mas inicializao com valor padrão
        this.nome = 'Nome Aluno'
        this.foto = null
        this.cor = 'tomato'

      
    }

    /**************************************************************************************************
     * static get observedAttributes(){} é uma função que é usada para observar mudanças nos atributos
     * do elemento. Nesse caso, ele retorna uma matriz com os nomes dos atributos que serão 
     * observados: 'nome', 'foto' e 'cor'
     **************************************************************************************************/
    static get observedAttributes(){
        return ['nome', 'foto','cor']
    }


    /******************************************************************************************************
     *  attributeChangedCallback(nameAttr, oldValue, newValue){} é uma função que é chamada automaticamente
     *  sempre que um dos atributos observados é alterado. Ele recebe três parâmetros: o nome do atributo 
     *  que foi alterado (nameAttr), o valor antigo do atributo (oldValue) e o novo valor do atributo (newValue).
     *  O código dentro dessa função define que o valor do atributo alterado deve ser atribuído à propriedade
     *  correspondente do objeto card.
     ******************************************************************************************************/
    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    /*********************************************************************************************************
     *Adiciona um elemento filho retornado pela função component() à sombra do elemento card.
     *
     * Adiciona um elemento <style> retornado pela função styles() à sombra do elemento card. 
     * Isso permite adicionar estilos ao elemento card sem afetar outros elementos na página. 
     * 
     ********************************************************************************************************/
    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles(){
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding : 0;
            margin : 0;
            box-sizing : border-box;
        }

        .card{
            width: 200px;
            height:300px;
            display: grid;
            grid-template-rows: 20% 1fr 20%;
            place-items: center;
            background-color: ${this.cor};
        }

        .card_text{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;
        }

        .card_image{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: blue;
            background-image: url(${this.foto});
            background-size: cover;
        }
        `

        return css
    }
    component(){
        const card = document.createElement('div')
        card.classList.add('card')
        const nome = document.createElement('div')
        nome.classList.add('card_text')
        nome.textContent = this.nome
        const imagem = document.createElement('div')
        imagem.classList.add('card_image')
        const turma = document.createElement('div')
        turma.classList.add('card_text')
        turma.textContent = 'DS2M'
        card.append(nome,imagem,turma)
        return card
    }
}

customElements.define('card-gustavo',card)