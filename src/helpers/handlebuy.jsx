//
// Takes in the product and gives it to add cart to add to the ID. 
// displays a "pop" up that will last 5 seconds before going away. 

/**
 Assigns 5 seconds 
 * @param {*} param0 
 * @returns 
 */
function HandleBuy({product,setVisibility}) { 
    if (!product) return; 
    addToCart(product); 
    setVisibility(true);
    setTimeout(() => { 
        setVisibility(false);
    },5000); 
}

export default HandleBuy