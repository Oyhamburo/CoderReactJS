import ItemProductDetail from "../ItemProductDetail/ItemProductDetail";

const ItemListDetail = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {
                return <ItemProductDetail key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemListDetail