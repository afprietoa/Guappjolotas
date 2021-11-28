import React, { useState, useEffect } from 'react'
// import { PrintCart } from '../hooks/PrintCart'
import { ButtonRemove, CartContainer, ImgCart, ItemCartContainer, NameCart, PriceCart, QuantityCart } from '../styles/CartStyle';

import { ButtonCtn, ButtonPurchase } from '../styles/CartStyle'

export const Cart = () => {

   const [cart, setCart] = useState([])
    
   

   useEffect(() => {
    const getLocalStorage = () =>{
        localStorage.getItem('Cart') && setCart(JSON.parse(localStorage.getItem('Cart')))
    };
       getLocalStorage();
   }, [])

   console.log(cart)
   console.log(typeof(cart))
    return (
        <div>
           {/* <PrintCart cart={cart} setCart={setCart}/>  */}
           <CartContainer>
            {
            cart.map((art)=>(
                <ItemCartContainer key={art.id}>
                    <ImgCart src={art.image} alt={art.name}/>
                    <NameCart>{art.name}</NameCart>
                    <PriceCart>$ {art.price}</PriceCart>
                    <QuantityCart>x {art.quantity}</QuantityCart>{""}
                    <ButtonRemove >
                        x
                    </ButtonRemove>

                </ItemCartContainer>
            ))
            }    
          </CartContainer> 
            <ButtonCtn>
                <ButtonPurchase>Pagar</ButtonPurchase>
            </ButtonCtn>
        </div>
    )
}
