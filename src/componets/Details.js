import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { getProductId } from '../helpers/getProductId'
import { getFlavors } from '../helpers/getFlavors'
import { getProducts } from '../helpers/getProducts'
import { ComboCheck } from '../hooks/ComboCheck'
import { CounterProduct } from '../hooks/CounterProduct'

import {
    
    DetailsContainer,
    PriceDetail,
    ButtonContainer,
    Cnt,
    ButtonOp,
    FlavorContainer,
    FlavorTxt,
    ComboTxt,
    ComboMain,
    ComboContainer,
    ComboPrinter,
    ComboTxtPrinter,
    ButtonCart
    

} from '../styles/DetailsStyles'


export const Details = () => {

    
    

    const [flavors, setFlavors] = useState(null)

    const [data1, setData1] = useState([]) 
    const [data2, setData2] = useState([])

    const {id} = useParams();
    const [product, setProduct] = useState([])

    
    
    


   
    
    const {counter,handleDecrement,handleIncrement } = CounterProduct()
    const { checkedProduct, handleCheckOn, handleCheckOff } = ComboCheck()
    const [products, setProducts] = useState(null)

    useEffect(() => {

        

        const update = () =>{
            getProducts()
            .then((products) =>{
                setProducts(products)
            })
            getFlavors()
            .then((data1) =>{
                const arr =  data1.map((art,i) =>(art))
                setFlavors(arr[0])
            })
            getProductId(id)
            .then((data2) =>{
                setProduct(data2)
            })
        };

        update();
       

    }, [])

    console.log(data1)
    console.log(data2)

    const flavorType = () => {
        if(product.flavorType && flavors){
            return product.flavorType === 'Tamale' ? printedFlavor(flavors.tamal):
                    product.flavorType === 'Drink' ? printedFlavor(flavors.drink):
                    console.error("It doesn't exist")
        }
    }
    const printedFlavor = (flavor) =>{
        return flavor.map(art =>(
            <img src={art.image} alt={art.flavor} key={art.id}/>
        ))
    }
    
    const comboType = () =>{
        if(product.flavorType && products){
            return product.flavorType === 'Tamale' ? filteredCombo('Drinks'):
                    product.flavorType === 'Drink' ? filteredCombo('Guajolotas'):
                    console.error("It doesn't exist")
        }
        
    }
    const filteredCombo = (category) =>{
        const combo = products.filter(art => art.category === category)
        console.log(combo)
        return printedCombo(combo)
    }
    const printedCombo = (combo) =>{
        console.log(combo)
        return (combo.map(art => (
            
            <ComboPrinter key={art.id}>
                <label>
                    <img src={art.image} alt={art.name}/>
                    <ComboTxtPrinter>{art.name}</ComboTxtPrinter>
                    <h5>+$ {art.price} MXN</h5>
                    <input type="checkbox" onChange={(e) => e.target.checked ? handleCheckOn(art):handleCheckOff(art)}/>
                </label>

            </ComboPrinter>
        )))
    }
    const cart = [] 
    const pack= []
    const handleAddToCart = () =>{
            const checkedCombo = checkedProduct

            const item =
            {
                name: product.name,
                id: product.id,
                price: product.price,
                image: product.image,
                quantity: counter,

            }
            
            
            console.log(checkedCombo)
            console.log(checkedProduct)
            
            cart.push(item)

            for (let i = 0; i < checkedCombo.length; i++) {
                
                
                
                pack.push( products.filter(art => art.name === checkedCombo[i].name)[0])

                console.log(pack)
                
                cart.push( {
                    name: pack[i].name,
                    id: pack[i].id,
                    price: pack[i].price,
                    image: pack[i].image,
                    quantity: 1,

                })
            }
                        
            console.log(cart)
           
            
            
            localStorage.setItem('Cart', JSON.stringify(cart))
    }
    return (
        <DetailsContainer>
        <>
          <img src={product.image} alt={product.name}/>
          <h1>{product.name}</h1> 
           <PriceDetail>${product.price} MXN</PriceDetail>
           <ButtonContainer>
               <ButtonOp onClick={handleDecrement}>-</ButtonOp>
               <Cnt>{counter}</Cnt>
               <ButtonOp onClick={handleIncrement}>+</ButtonOp>
            </ButtonContainer>
        </>
        <FlavorContainer>
            <FlavorTxt>Flavor</FlavorTxt>
            <div>{flavorType()}</div>
        </FlavorContainer>

            <ComboMain>
                <ComboTxt>GuajoloCombo</ComboTxt>
                <ComboContainer>{comboType()}</ComboContainer>
            </ComboMain>

             <Link to='/cart'>
                <ButtonCart onClick={handleAddToCart}>Add {counter} To Cart</ButtonCart>
            </Link> 
            
        </DetailsContainer>
    )
}
    
