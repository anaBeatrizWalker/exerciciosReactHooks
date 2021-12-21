import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext, {data} from '../../data/DataContext'

const UseContext = (props) => {

    const context = useContext(DataContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                {/*Acessando somente o conteúdo de texto do Contexto*/}
                <span className="text">{context.text}</span>
                {/*Acessando somente o number do Contexto*/}
                <span className="text">{context.number}</span>
            </div>
        </div>
    )
}

export default UseContext
