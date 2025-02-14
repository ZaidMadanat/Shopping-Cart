function addToCart(setCart, product) { 
    setCart((prevCart) => { 
        const existingProduct = prevCart.find((item) => item.id === product.id)
        if (existingProduct) { 
            return prevCart.map((item) => 
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
        } 
        else { 
            return [...prevCart, {...product, quantity: 1}]
        }
    })
}
export default addToCart;