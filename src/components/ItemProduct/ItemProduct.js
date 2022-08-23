import './ItemProduct.scss';
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
            </article>
        </Link>
    )
}

export default ItemProduct