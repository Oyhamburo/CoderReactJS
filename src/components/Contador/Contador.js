import { useState } from 'react';

const Count = ({stock,setQuantitySelected}) => {
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
    const onAdd = () =>{
        setQuantitySelected(contador)
    }
    return(
        <>
            <div >
                <button onClick={removeNumber}>-</button>
                <span>{contador}</span>
                <button onClick={addNumber}>+</button>
            </div>
            <div >
                <button onClick={onAdd}>Comprar</button>
            </div>
        </>
    )
}

export default Count