import React, { useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getProductName } from '../helpers/getProductName'

import { Form, FormInput } from '../styles/HomeStyles'

import { useForm } from '../hooks/useForm'

export const SearchScreen = ({setCategories}) => {


    const navigate = useNavigate()
    const location = useLocation();

    const {q=''} = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    const { searchText } = formValues

    // const [filteredProduct, setFilteredProduct] = useState([])

    

    useEffect(() => {
        getProductName(q)
        .then((product) =>{
                setCategories(product)
            })
    }, [q, setCategories])

    

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }


    return (
        <>
            <Form onSubmit={handleSearch}>
                <FormInput
                    type="text"
                    placeholder="Flavor of guajalota, drink ..."
                    name='searchText'
                    autoComplete='off'
                    value={searchText}
                    onChange={handleInputChange}
                />
            </Form>
            
            
        </>

    )
}

