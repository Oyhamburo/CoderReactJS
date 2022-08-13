import { useState } from 'react';
import { CartContext } from '../context/cartContext';

const Count = ({stock,setQuantitySelected,dataProduct}) => {
    const {setCartProducts} = useState(CartContext)

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
        console.log(dataProduct)
        setCartProducts(dataProduct)
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