import './ItemContainer.scss';
import ItemProduct from '../ItemProduct/ItemProduct'
const ItemContainer = ({title}) => {
    const product1 = {
        title:'Cortina Roller',
        descript:'Blanca',
        price:'$$$$',
        src:'./cortina.webp',
        stock:'7'
    }
    const product2 = {
        title:'Cortina Roller',
        descript:'Blanca',
        price:'$$$$',
        src:'./cortina.webp',
        stock:'2'
    }
    const product3 = {
        title:'Cortina Roller',
        descript:'Blanca',
        price:'$$$$',
        src:'./cortina.webp',
        stock:'3'
    }
    return(
        <section >
            <h2>{title}</h2>
            <div className='itemContainer'>
                <ItemProduct  data={product1} />
                <ItemProduct  data={product2} />
                <ItemProduct  data={product3} />
            </div>
        </section>
    )
}

export default ItemContainer