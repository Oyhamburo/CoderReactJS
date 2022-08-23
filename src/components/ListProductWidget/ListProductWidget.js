import ProductWidget from "./ProductWidget"

const ListProductWidget = ({dataProducts}) => {
    return(
        <>
        {dataProducts.map( (product) => {
            return <ProductWidget key={product.id} data={product}/>
        })}
    </>
    )
}

export default ListProductWidget