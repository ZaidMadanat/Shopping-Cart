import Cart from "./Cart";
function addToCart({product}) { 
    if (product.quantity >= 1 ) { 
        product.quantity++;
        return;
    }
    else { 
        prodcut.quantity++; 
        return product;
    }
}

export default addToCart;