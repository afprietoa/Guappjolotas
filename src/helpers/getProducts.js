

export const getProducts = async() => {

        const url = `https://api-guajalotas-1.herokuapp.com/products/`
        const res = await fetch(url);
        const data = await res.json();

    
    return data

}

