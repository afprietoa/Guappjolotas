import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts'
import { NavCategory } from '../hooks/NavCategory'
import SearchProduct from '../hooks/SearchProduct'

import { Card, ContainerMain, DetailsLink, H2Price, H2Text, HeaderPage, ImgCard, MainPage, TextCard } from '../styles/HomeStyles'
import { Header } from './Header'

export const Home = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const updateProducts = () =>{
        getProducts()
        .then((arts) => {
            setProducts(arts)

            const guajolota = arts.filter(art => art.category == 'Guajolotas')
            setCategories(guajolota)
        })
    }
    useEffect(() => {
        updateProducts()
    }, [])

    return (
        <>
           <MainPage >
               <Header />
              <HeaderPage>
                  Nothing like a Guajolota to start the day. 
              </HeaderPage>
              <SearchProduct products={products} />
              <NavCategory products={products} setCategories={setCategories} />
                <ContainerMain>
                    {
                       categories.map((art) =>(
                        <DetailsLink to={`/details/${art.id}`} key={art.id}>
                        <Card>
                            <ImgCard style={{backgroundImage: `url(${art.image})`}}/>
                            <TextCard>
                                <H2Text>{art.name}</H2Text>
                                <H2Price>{art.price} MXN</H2Price>
                            </TextCard>
                        </Card>
                    </DetailsLink>
                       )) 
                    }
                </ContainerMain>
              
            </MainPage>  
        </>
    )
}
