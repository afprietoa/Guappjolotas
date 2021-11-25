import React from 'react'
import { ButtonCategory } from '../styles/CategoriesStyles'

export const NavCategory = ({products, setCategories}) => {
    const handleCategory = (e) =>{

        const category = products.filter(
            (art) => art.category === e.target.innerText
        )
        setCategories(category)
    }
    return (
        <nav>
            <ButtonCategory onClick={handleCategory}>Guajolotas</ButtonCategory>
            <ButtonCategory onClick={handleCategory}>Drinks</ButtonCategory>
            <ButtonCategory onClick={handleCategory}>Tamales</ButtonCategory>
            
        </nav>
    )
}
