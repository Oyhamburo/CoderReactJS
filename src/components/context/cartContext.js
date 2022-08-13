import { createContext, useState } from "react";

const CartContext = createContext;

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    console.log("cartProducts",cartProducts)
    
    const addProductToCart = (prodcut) => {
        setCartProducts([...cartProducts, prodcut])
    }

    const data = {
        cartProducts,
        setCartProducts
        // addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }


