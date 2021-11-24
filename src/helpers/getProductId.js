
import { useParams } from 'react-router'
import { useState } from 'react/cjs/react.development'

export const getProductId = async() => {
    const {id} = useParams();
    const [product, setProduct] = useState([])

    const getProduct = async() =>{
        const url = `https://api-guajalotas-1.herokuapp.com/products/${id}`
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data)
    }
    return {product, getProduct}

}
