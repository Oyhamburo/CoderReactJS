import './NavBar.scss';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import ListProductWidget from '../ListProductWidget/ListProductWidget';

const CardWidget = () => {
    const {cartProducts} = useContext(CartContext)
    
    const hover = () => {
        console.log("HOVER")
    }
    return(
        <>
            <div className='icono'>IconoCarrito</div>
            <section className='section' onMouseLeave={() => hover()}>
                <ListProductWidget dataProducts={cartProducts}/>
            </section>
        </>
    )
}

export default CardWidget