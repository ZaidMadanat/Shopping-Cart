function removeFromCart(cart, setCart, id) { 
    setCart(cart.filter((item) => item.id !== id));
}

export default removeFromCart;

