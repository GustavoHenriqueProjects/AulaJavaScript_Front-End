/***********************************************************************
 * Objetico: Acessar Json pelo postman e retorna os valores solicitados.
 * Data: 20/03/2023
 * Autor: GustavoHenrique
 ***********************************************************************/
'use strict'
export const getEstadoSelecionado = async ($uf) => {

    const url = `http://localhost:8080/v1/senai/estado/sigla?uf=${$uf}`

    const response = await fetch(url)
    const data = await response.json()
    
    return data
}