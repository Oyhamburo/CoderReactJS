import { useState } from 'react';

const Count = ({stock}) => {
    const [contador, setContador] = useState(1);
    const addNumber = () => {
        if(contador<stock){
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if(contador>0){
            setContador(contador - 1)
        }
    }
    return(
        <div >
            <button onClick={removeNumber}>-</button>
            <span>{contador}</span>
            <button onClick={addNumber}>+</button>
        </div>
    )
}

export default Count