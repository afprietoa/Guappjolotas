import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Form, FormInput } from '../styles/HomeStyles'

const SearchProduct = ({products}) => {
    const [textSearch, setTextSearch] = useState("")
    const [search, setSearch] = useState("")
    const handleSearch = () =>{
        setSearch(textSearch)
    }
    const lookUp = products.filter(art =>(
        art.name.toLowerCase().includes(search.toLowerCase())
    ))
    console.log(lookUp)
    return (
        <Form onSubmit={(e)=>{e.preventDefault(); handleSearch()}}>
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
export default React.memo(SearchProduct)
