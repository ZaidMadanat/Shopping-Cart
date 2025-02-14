
/** 
 * @param {*} param0 
 * changes visibility of added to card pop up. 
 * {@link addToCart} to add product. 
 */
function HandleBuy({ product, setVisible, addToCart, setCart }) { 
    if (!product) return; 

    addToCart(setCart, product); 
    setVisible(true);
    setTimeout(() => { 
        setVisible(false);
    },5000); 
}

export default HandleBuy