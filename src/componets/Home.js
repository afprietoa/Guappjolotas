import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts'
import { NavCategory } from '../hooks/NavCategory'


import { Cards, ContainerMain, DetailsLink, H2Price, H2Text, HeaderPage, ImgCards, MainPage, TextCards } from '../styles/HomeStyles'
import { SearchScreen } from './SearchScreen'


export const Home = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const updateProducts = () =>{
        getProducts()
        .then((arts) => {
            setProducts(arts)
            // eslint-disable-next-line
            const guajolota = arts.filter(art => art.category == 'Guajolotas')
            setCategories(guajolota)
        })
    }
    useEffect(() => {
        updateProducts()
    }, [])
    console.log(categories)
    console.log(typeof(categories))

    return (
        <>
      
           <MainPage >
              
              <HeaderPage>
                  Nothing like   a <br/>Guajolota to<br/>  start the day 
              </HeaderPage>

             <ContainerMain> 
              <SearchScreen setCategories={setCategories}/>
              <NavCategory products={products} setCategories={setCategories} />
                
                
                    {
                       categories.map((art) =>(
                        <DetailsLink to={`/details/${art.id}`} key={art.id}>
                        <Cards>
                            <ImgCards style={{backgroundImage: `url(${art.image})`}}/>
                            <TextCards>
                                <H2Text>{art.name}</H2Text>
                                <H2Price>${art.price} MXN</H2Price>
                            </TextCards>
                        </Cards>
                    </DetailsLink>
                       )) 
                    }
                </ContainerMain>
              
            </MainPage>  
        </>
    )
}
