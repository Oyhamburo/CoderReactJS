import { useContext } from "react"
import { CartContext } from "../context/CartContext"
const ProductWidget = ({data}) => {
    const {removeProduct} = useContext(CartContext)
    return(
        <article>
            <h3>{data.title}</h3>
            <span>Cantidad: {data.cant}</span>
            <button onClick={() => removeProduct(data.id)}>Eliminar</button>
        </article>
    )
}

export default ProductWidget