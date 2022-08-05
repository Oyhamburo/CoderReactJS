import './ItemContainer.scss';
import ItemList from '../itemList/itemList';
import { useState } from 'react';
import { useEffect } from 'react';
import products from '../utils/products.mock'
const ItemContainer = ({title}) => {
    
    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 500)
    })

    
    useEffect(() =>{
        getProducts
        .then( (res) => {
            console.log(res)
            setListProducts(res)
        })
        .catch( (error) => {
            console.log("la llama fallo")
        })
        .finally( () => {
        })
    }, [])


    return(
        <section >
            <h2>{title}</h2>
            <div className='itemContainer'>
                <ItemList dataProducts={listProducts} />
            </div>
        </section>
    )
}

export default ItemContainer