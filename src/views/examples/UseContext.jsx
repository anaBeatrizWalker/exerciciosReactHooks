import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext, {data} from '../../data/DataContext'

const UseContext = (props) => {

    const context = useContext(DataContext)

    function  setNumber(delta) {
        context.setState({
            ...context.state, //recupera todos os atributos
            number: context.state.number + delta //sobscreve o atributo a ser mudado
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                {/*Acessando somente o conteúdo de texto do Contexto*/}
                <span className="text">{context.state.text}</span>
                
                {/*Acessando somente o number do Contexto*/}
                <span className="text">{context.state.number}</span>

                <div>
                    <button className="btn" onClick={() => setNumber(+1)}>+1</button>
                    <button className="btn" onClick={() => setNumber(-1)}>-1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
