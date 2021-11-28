
export const getProductId = async(id) => {

        const url = `https://api-guajalotas-1.herokuapp.com/products/${id}`
        const res = await fetch(url);
        const data = await res.json();
        
    
    return data

}
