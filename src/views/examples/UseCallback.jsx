import React, {useState, useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function(delta){
        setCount(current => current + delta)//passando uma função callback não se depende mais do count
    }, [setCount])//função criada uma única vez

    //useCallback renderiza sempre a mesma função enquanto setCount não modificar

    //Assim, UseCallbackButtons não renderiza mais diversas vezes sem necessidade

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>
                
                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
