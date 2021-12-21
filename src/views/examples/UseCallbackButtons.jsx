import React from 'react'

const UseCallbackButtons = (props) =>{
    console.log('renderizou')
    return (
        <div>
            <button className="btn" onClick={()=> props.inc(6)}>+6</button>
            <button className="btn" onClick={()=> props.inc(12)}>+12</button>
            <button className="btn" onClick={()=> props.inc(18)}>+18</button>
        </div>
    )
}
export default React.memo(UseCallbackButtons) 
//cria um componente casheado que só renderiza o componente se as propriedades forem alteradas