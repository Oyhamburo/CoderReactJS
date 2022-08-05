import './NavBar.scss';
import CardWidget from './cardWidget';
import {Link} from 'react-router-dom'
const NavBar = () => {
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
            </div>
            <div>
                <CardWidget />
            </div>
        </nav>
    )
}

export default NavBar