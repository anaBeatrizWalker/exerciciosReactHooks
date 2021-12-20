import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")//valor inicial: string vazia

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                {/*Estado inicial do componente */}
                <span className="text">{count}</span>

                {/*Mudando o Estado*/}
                <div>
                    {/*Adicionando 1*/}
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    
                    {/*Subtraindo 1*/}
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    
                    {/*Setando 1000 fixo*/}
                    <button className="btn" onClick={() => setCount(1000)}>1000</button>
                    
                    {/*Adicionando 1000 ao valor corrente*/}
                    <button className="btn" onClick={() => setCount(current => current + 1000)}>+1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
            <span className="text">{name}</span>{/*mostra o que está sendo digitado*/}
        </div>
    )
}

export default UseState
