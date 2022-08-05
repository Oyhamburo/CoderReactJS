import Count from '../Contador/Contador';

const ItemDetail = ({data}) => {
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
                <Count stock={stock}/>
                <div >
                    <button>Comprar</button>
                </div>
            </div>
        </article>
    )
}
export default ItemDetail