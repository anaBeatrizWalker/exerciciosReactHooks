//Componente com um estado interno que controla o estado da aplicação
import React, { useState } from 'react'

const initialState = {
    number: 1,
    text: 'Context API + Hooks',
}

export const AppContext = React.createContext(initialState)

const Store = props => {

    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,//pega todo o objeto do estado inicial
            [key]:value//atualiza o estado
        })
    }

    return (
        <AppContext.Provider value={{
            //Contexto
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),//Função de mudança individual
            setText: t => updateState('text', t)
        }}>
            {props.children}
        </AppContext.Provider>
        
    )
}
export default Store