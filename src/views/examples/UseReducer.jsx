import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    car: [],
    products: [],
    user: null,
    number: 0,
}
//Pega o estado atual do objeto, e para cada ação atualiza e altera algum atributo
function reducer(state, action){
    switch(action.type){//toda ação tem tipos
        case 'numberAdd2':
            //pega o estado atual, clona e atualiza number 
            return {...state, number: state.number + 2}

        case 'login':
            return {...state, user: {name: action.name}}

        //DESAFIOS
        case 'numberMulti7':
            return {...state, number: state.number * 7}
            
        case 'numberDiv25':
            return {...state, number: state.number / 25}
        
        case 'numberParseInt':
            return {...state, number: parseInt(state.number)}

        case 'numberAddN':
            return {...state, number: state.number + action.payload}

        default:
            //retorna o estado atual
            return state
    }
}

const UseReducer = (props) => { 

    const [state, dispath] = useReducer(reducer, initialState)//recebe a função que atualiza o estado, e o estado inicial
    
    //dispath = execução, disparar uma ação

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>}

                <span className="text">{state.number}</span>
                
                <div>
                    <button className="btn" onClick={()=> dispath({type: 'login', name: 'Ana Beatriz'})}>Logar</button>

                    <button className="btn" onClick={()=> dispath({type: 'numberAdd2'})}>+2</button>
                </div>
                
                {/*DESAFIOS*/}
                <div>
                    <button className="btn" onClick={()=> dispath({type: 'numberMulti7'})}>x7</button>

                    <button className="btn" onClick={()=> dispath({type: 'numberDiv25'})}>/25</button>

                    <button className="btn" onClick={()=> dispath({type: 'numberParseInt'})}>int</button>

                    <button className="btn" onClick={()=> dispath({type: 'numberAddN', payload: -14})}>-14</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
