import { useState } from "react/cjs/react.development"


export const ComboCheck = () => {
    const [checkedProduct, setCheckedProduct] = useState([])
    const handleCheckOn = (art) =>{
        setCheckedProduct([
            ...checkedProduct,
                art
        ])
    }
    const handleCheckOff = (art)=> {
        const checkOff = checkedProduct.filter(art => art !== art)
        setCheckedProduct(checkOff)
    }
    return {
        checkedProduct,
        handleCheckOn, 
        handleCheckOff
    }
}
