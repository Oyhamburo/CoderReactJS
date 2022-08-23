import Count from '../Contador/Contador';
import { useState } from 'react';
import './ItemProductDetail.scss';
import {Link} from 'react-router-dom'


const ItemDetail = ({data}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    const {title,price,stock,src} = data;
    return(
        <article className='itemProductDetail'>
            <img src={src} className='itemProductDetail__img'/>
            <div className='itemProductDetail__container'>
                <h2>{title}</h2>
                <div>
                    <span className='itemProductDetail__container__span1'>{price}</span>
                    <span className='itemProductDetail__container__span2'>{15000}</span>
                </div>
                <div className='itemProductDetail__container__Marca'>Marca: Roller Shop</div>
                <div>Color: TEST</div>
                {
                    quantitySelected > 0 ? <Link to="/cart"><button>Terminar Compra</button></Link> : <Count stock={stock} setQuantitySelected={setQuantitySelected} data={data}/>
                }
                
            </div>
        </article>
    )
}
export default ItemDetail