import React from 'react'

export const data = {
    number: 123,
    text: 'Context API'
}

const DataContext = React.createContext(data)
//DataContext = obejto de contexto 
//React.createContext(data) = criando o contexto e passando os dados

export default DataContext