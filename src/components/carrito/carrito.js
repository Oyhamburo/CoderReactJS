import { useContext } from "react"
import { CartContext } from "../context/CartContext"
// import 'Carrito.scss' 
const CheckOut = () => {
    const {cartProducts} = useContext(CartContext)
    return(
        <body>
            {cartProducts.map( (product) => {
                return <article><h1>{product.title}</h1><p>{product.cant}</p><img src={product.src} /></article>
            })}

        </body>
    )
}

export default CheckOut