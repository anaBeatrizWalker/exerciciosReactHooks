import React, { useRef } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

//Concatenar cada dígito em cada input
const merge = function(s1, s2){
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("")
}

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    console.log(myInput1.current)

    useEffect(function(){
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function(){
        count.current ++
        myInput1.current.focus()
    }, [value2])
    
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

                <span className="text">{merge(value1,value2)}</span>

                <input type="text" className="input" 
                    ref={myInput1}//cria a referência do input no current
                    value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>

            {/*Ex02: usando useRef para alterar o html*/}
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2} 
                    value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
