import { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
    const { cart, setCart, removeFromCart } = useContext(CartContext); 

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.title} - Quantity: {item.quantity}
                            <button onClick={() => removeFromCart(cart, setCart, item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;