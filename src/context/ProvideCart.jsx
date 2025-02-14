import {useState} from "react"; 
import CartContext from "./CartContext";
import addToCart from "./addToCart";
import removeFromCart from "./removeFromCart"

/**
 * used to wrap the children of the other component projects. 
 * @param {*} param0 
 * @returns 
 */
function ProvideCart({ children }) { 
    const [cart, setCart] = useState([]); 

    return ( 
        <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}> 
            {children}
        </CartContext.Provider>
    )
}

export default ProvideCart;
