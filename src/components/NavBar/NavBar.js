import './NavBar.scss';
import CardWidget from './cardWidget';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { display } from '@mui/system';
const NavBar = () => {
  const {cartProducts} = useContext(CartContext)
    const totalNumber = () => {
        let count = 0
        cartProducts.forEach(element => {
            count = count + element.cant
        });
        return count
    };
    return(
        <nav>
            <div>
                <img src="./logo.jpg" className='nav__img'/>
            </div>
            <div className='nav__menu'>
                <div>
                    <Link to="/">Inicio</Link>
                </div>
                <div>
                    <Link to="/productos">Productos</Link>
                </div>
                <div>
                    <Link to="">About Us</Link>
                </div>
                <div>
                    <Link to="/contacto">Contacto</Link>
                </div>
                <div>
                    <Link to="/cart">Carrito</Link>
                </div>
            </div>
            <div >
                <span>{totalNumber()}</span>
                <CardWidget />
            </div>
        </nav>
    )
}

export default NavBar