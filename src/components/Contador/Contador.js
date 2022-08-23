import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Count = ({stock,setQuantitySelected,data}) => {
    const {addProductToCart} = useContext(CartContext)

    const [contador, setContador] = useState(0);

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
        for (let index = 0; index < contador; index++) {
            data.cant = contador;
            addProductToCart(data)
        }
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