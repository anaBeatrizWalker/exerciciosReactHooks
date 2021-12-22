import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, allReducers} from '../../store/index'
import {numberAdd2, login} from '../../store/actions'

const UseReducer = (props) => { 

    const [state, dispath] = useReducer(allReducers, initialState)//recebe a função que atualiza o estado, e o estado inicial
    
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
                    <button className="btn" onClick={()=> login(dispath, 'Ana Beatriz')}>Logar</button>

                    <button className="btn" onClick={()=> numberAdd2(dispath)}>+2</button>
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
