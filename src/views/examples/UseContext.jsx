import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext, {data} from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import Store, { AppContext } from '../../data/Store'

const UseContext = (props) => {
    //Ex 01
    const context = useContext(DataContext)

    function  changeNumber(delta) {
        context.setState({
            ...context.state, //recupera todos os atributos
            number: context.state.number + delta //sobscreve o atributo a ser mudado
        })
    }

    //Ex 02
    const {number, text, setNumber, setText} = useContext(AppContext)

    useEffect(function(){
        if(number === 10){
            setText('Você alcançou o número 10 positivo!')
        }else if(number === -10){
            setText('Você alcançou o número 10 negativo!')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            {/*Acessando valores/conteúdo do Contexto*/}
            <SectionTitle title="Exercício #01"/>
                <div className="center">
                    
                    <span className="text">{context.state.text}</span>
                    
                    <span className="text">{context.state.number}</span>

                    <div>
                        <button className="btn" onClick={() => changeNumber(+1)}>+1</button>
                        <button className="btn" onClick={() => changeNumber(-1)}>-1</button>
                    </div>
                </div>

            {/*Atualizando valores/conteúdo do Contexto*/}
            <SectionTitle title="Exercício #02"/>    
                <div className="center">
                    
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    
                    <div>
                        <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                        <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    </div>
                </div>
        </div>
    )
}

export default UseContext
