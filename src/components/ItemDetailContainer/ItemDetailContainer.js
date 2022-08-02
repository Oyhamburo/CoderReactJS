import './ItemDetailContainer.scss';
import ItemListDetail from '../ItemListDetail/ItemListDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import product from '../utils/product.mock';
const ItemDetailContainer = () => {
    
    const [listProduct, setListProduct] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(product)
        }, 2000)
    })

    
    useEffect(() =>{
        getProducts
        .then( (res) => {
            setListProduct(res)
        })
        .catch( (error) => {
            console.log("la llama fallo")
        })
        .finally( () => {
        })
    }, [])


    return(
        <section >
            <div className='itemContainer'>
                {console.log('hola'+listProduct)}
                <ItemListDetail dataProducts={listProduct} />
            </div>
        </section>
    )
}

export default ItemDetailContainer