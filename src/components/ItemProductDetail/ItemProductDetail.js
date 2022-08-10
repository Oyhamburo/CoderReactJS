// import './ItemProductDetail.scss';
// import { useState } from 'react';
// import Count from '../Contador/Contador';
// const ItemProductDetail = ({data}) => {
//     const [quantitySelected, setQuantitySelected] = useState(1)




//     const {id,title,color,price,src,stock}= data;   
//     let priceOld = price +3000;
//     return(
//         <article className='itemProductDetail'>
//             <img src={src} className='itemProductDetail__img'/>
//             <div className='itemProductDetail__container'>
//                 <h2>{title}</h2>
//                 <div>
//                     <span className='itemProductDetail__container__span1'>{price}</span>
//                     <span className='itemProductDetail__container__span2'>{priceOld}</span>
//                 </div>
//                 <div className='itemProductDetail__container__Marca'>Marca: Roller Shop</div>
//                 <div>Color: {color}</div>
//                 <Count stock={stock} setQuantitySelected={setQuantitySelected}/>
//                 <div >
//                     <button>Comprar</button>
//                 </div>
//             </div>
//         </article>
//     )
// }

// export default ItemProductDetail