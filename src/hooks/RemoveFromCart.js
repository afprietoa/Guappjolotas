
export const RemoveFromCart = () => {
    const removeFromCart = (id, cart, setCart) =>{
        const deleteProduct = cart.filter(art => art.id !== id)
    localStorage.setItem("Cart", JSON.stringify(deleteProduct))
    setCart(deleteProduct)
    }
    
    return {removeFromCart}
}
