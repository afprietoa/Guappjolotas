import React, { useState } from 'react'
import { Form, FormInput } from '../styles/HomeStyles'

export const SearchProduct = ({products}) => {
    const [textSearch, setTextSearch] = useState("")
 

    const lookUp = products.filter(art =>(
        art.name.toLowerCase() === textSearch.toLowerCase()
    ))
    console.log(textSearch)
    console.log(lookUp)
    return (
        <Form onSubmit={(e)=>{e.preventDefault()}}>
            <FormInput 
            id="search"
            type="search"
            value={textSearch}
            placeholder="Flavor of guajalota, drink ..."
            onChange={(e)=>{
                setTextSearch(e.target.value)
            }}
            />

           
        </Form>
    )
}
 
