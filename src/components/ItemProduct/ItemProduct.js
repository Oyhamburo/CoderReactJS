import './ItemProduct.scss';
import Count from '../Contador/Contador';
import {Link} from 'react-router-dom';
const ItemProduct = ({data}) => {
    const {id,title,descript,price,src,stock}= data;
    return(
        <Link to={`/producto/${id}`}>
            <article className='itemProduct'>
                <img src={src} />
                <div>
                    <h2>{title}</h2>
                    <p>{descript}</p>
                    <span>{price}</span>
                </div>
                <Count stock={stock}/>
                <div >
                    <button>Comprar</button>
                </div>
            </article>
        </Link>
    )
}

export default ItemProduct