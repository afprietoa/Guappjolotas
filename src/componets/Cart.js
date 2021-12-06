import React, { useState, useEffect } from 'react'
import { RemoveFromCart } from '../hooks/RemoveFromCart';

import { ButtonRemove, CartContainer, ImgCart, ItemCartContainer, NameCart, PriceCart, TxtCart } from '../styles/CartStyle';

import { ButtonCtn, ButtonPurchase } from '../styles/CartStyle'
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {

   const [cart, setCart] = useState([])
    
    const {removeFromCart} = RemoveFromCart()

   useEffect(() => {
    const getLocalStorage = () =>{
        localStorage.getItem('Cart') && setCart(JSON.parse(localStorage.getItem('Cart')))
    };
       getLocalStorage();
   }, [])

   console.log(cart)
   console.log(typeof(cart))

//    const testKey = 'pk_test_51K1t7VFfJ3aeAOIFVmIzJauVn8EtvEXfZOflGUpzFMDrkV3Z6jvE45Jv0H2IbitYIXkwWmChKpDHScI2D9Epu8Fe003z201YgS'
// 
//     const serverLink = ''

//    const handlePurchase = async() =>{
//        const stripeRequest = loadStripe(testKey)
//        const  products = cart
//        const arts = {products}
//        const stripe = await stripeRequest
//        const res = await fetch(`${serverLink}/create-checkout-session`,{
//            body: JSON.stringify(arts),
//            method: 'POST',
//            headers:{
//                'Content-Type': 'application/json'
//            }
//        });
//        const session = await res.json()
//        await stripe.redirectToCheckout({
//            sessionId: session.id,
//        })
//    }


    return (
        <div>
           {/* <PrintCart cart={cart} setCart={setCart}/>  */}
           <CartContainer>
            {
            cart.map((art)=>(
                <ItemCartContainer key={art.id}>
                    <ImgCart src={art.image} alt={art.name}/>
                    <TxtCart>
                    <NameCart>{art.name}</NameCart>
                    <PriceCart>$ {art.price} x {art.quantity}</PriceCart>
                    </TxtCart>
                    <ButtonRemove 
                    onClick={()=> removeFromCart(art.id, cart, setCart)}>
                        x
                    </ButtonRemove>

                </ItemCartContainer>
            ))
            }    
          </CartContainer> 
            <ButtonCtn>
                <ButtonPurchase >Purchase</ButtonPurchase>
            </ButtonCtn>
        </div>
    )
}

export default Cart