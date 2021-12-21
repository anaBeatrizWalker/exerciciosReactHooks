import React, { useRef } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const count = useRef(0)

    useEffect(function(){
        count.current = count.current + 1//controla todas as renderizações do componente
    }, [value1])//modifica o valor de current quando o value for moficado
    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            {/*Ex01: quantidade que um componente foi renderizado*/}
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: [</span>
                    
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <span className="text">{value1}</span>

                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
                
            </div>
        </div>
    )
}

export default UseRef
