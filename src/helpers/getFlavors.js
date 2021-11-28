



export const getFlavors = async() => {
    

    
        const url =`https://api-guajalotas-2.herokuapp.com/flavors`
        const res = await fetch(url)
        const data = await res.json()
        
    
    return data
}
