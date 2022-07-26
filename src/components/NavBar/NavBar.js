import './NavBar.scss';
import CardWidget from './cardWidget';
const NavBar = () => {
    return(
        <nav>
            <div>
                <img src="./logo.jpg" className='nav__img'/>
            </div>
            <div className='nav__menu'>
                <div>
                    <a>La empresa</a>
                </div>
                <div>
                    <a>Galeria</a>
                </div>
                <div>
                    <a>Cortinas</a>
                </div>
                <div>
                    <a>Contacto</a>
                </div>
            </div>
            <div>
                <CardWidget />
            </div>
        </nav>
    )
}

export default NavBar