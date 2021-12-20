import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    /*Criando estado
    const array = useState(0)//param: valor inicial
    const num = array[0]//elemento que recebe o valor inicial
    const setNum = array[1]//recebe função que altera o valor inicial
    */

    //OU usando recurso do Destructuring
    const [count, setCount] = useState(0)

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
        </div>
    )
}

export default UseState
