/*****************************************************************************************
 * Objetico: Acessar Json pelo http://localhost:8080 e retorna os valores dados de todas as
 * cidades do estado selecionado.
 * Data: 20/03/2023
 * Autor: GustavoHenrique
 *****************************************************************************************/

'use strict'

export const getCidadesDoEstado = async($uf) => {
    const url = `http://localhost:8080/v2/senai/cidades?uf=${$uf}`

    const response = await fetch(url)
    const data = await response.json()

    return{
        cidades: data.cidade,
        total:  data.quantidade_cidade
    }
}