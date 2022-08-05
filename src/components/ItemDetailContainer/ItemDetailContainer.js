import './ItemDetailContainer.scss';
import ItemListDetail from '../ItemListDetail/ItemListDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import product from '../utils/product.mock';
import products from '../utils/products.mock';
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = () => {
    
    const [listProduct, setListProduct] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(product)
        }, 150)
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

    const [productData, setProductData] = useState({})
    const { id }= useParams();
    useEffect( () => {
        products.some( (e) => {

            if(e.id == id) {
                setProductData(e)
            }
        })
    })

    return(
        <section >
            <div className='itemContainer'>
                {/* <ItemListDetail dataProducts={listProduct} /> */}
                <ItemDetail data={productData} />
            </div>
        </section>
    )
}

export default ItemDetailContainer

