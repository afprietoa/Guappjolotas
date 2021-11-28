// import React from 'react'
// import { ButtonRemove, CartContainer, ImgCart, ItemCartContainer, NameCart, PriceCart, QuantityCart } from '../styles/CartStyle';
// import { RemoveFromCart } from './RemoveFromCart';

// export const PrintCart = ({cart, setCart}) => {
    
//     const {removeFromCart} = RemoveFromCart();
//     console.log(cart)
    
//     return (
        
//           <CartContainer>
//             {
//             cart.map((art)=>(
//                 <ItemCartContainer key={art.id}>
//                     <ImgCart src={art.image} alt={art.name}/>
//                     <NameCart>{art.name}</NameCart>
//                     <PriceCart>$ {art.price}</PriceCart>
//                     <QuantityCart>x {art.quantity}</QuantityCart>{""}
//                     <ButtonRemove >
//                         x
//                     </ButtonRemove>

//                 </ItemCartContainer>
//             ))
//             }    
//           </CartContainer>  
        
//     )
// }
