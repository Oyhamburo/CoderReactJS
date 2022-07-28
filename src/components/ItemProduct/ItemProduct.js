import './ItemProduct.scss';
import Count from '../Contador/Contador';
const ItemProduct = ({data}) => {
    const {id,title,descript,price,src,stock}= data;
    return(
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
    )
}

export default ItemProduct