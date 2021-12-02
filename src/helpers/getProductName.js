

export const getProductName = async(name ='') => {


    const url = `https://api-guajalotas-1.herokuapp.com/products/`
    const res = await fetch(url);
    const data = await res.json();

    if(name.length === 0){
        return [];
    }
    name = name.toLocaleLowerCase();

    return data.filter(art => art.name.toLocaleLowerCase().includes(name))

}