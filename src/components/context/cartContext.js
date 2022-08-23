import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    
    const addProductToCart = (product) => {
        const indice = cartProducts.findIndex(p => p.id === product.id) 
        if (indice !== -1) {
            setCartProducts(
                cartProducts.map((i) => {
                    if (i.id === product.id) {
                        return { ...i, cant: i.cant + product.cant }
                    }
                    else {
                        return i
                    }
                })
            )
        } else {
            setCartProducts([product, ...cartProducts]);
        }
    }
    
    const removeProduct = (id) => {
        setCartProducts(cartProducts.filter(i => i.id !== id))
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        removeProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }


