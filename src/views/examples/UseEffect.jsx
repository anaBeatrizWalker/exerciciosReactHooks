import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n -1) * n
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    //setFatorial(calcFatorial(number)) = gera muitas renderizações, causando um erro

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])
    //1º param = função que é chamada sempre que algo modificar, sendo esse algo o número
    //2º param = dependência para que a função seja chamada
    //Acaba com o loop infinito de renderizações

    useEffect(function(){
        if(fatorial > 99999999) {
            document.title = "Eita, esse número é imenso ein!"
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className='center'>

                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}></input>

                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
