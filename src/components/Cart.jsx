import { useContext } from "react";
import CartContext from "../context/CartContext";
import { CartContainer, CartList } from "../styles/Cart.styled";

function Cart() {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

  return (
    <CartContainer>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <CartList>
          {cart.map((item) => (
            <li key={item.id}>
              <span className="item-info">
                {item.title} - Quantity: {item.quantity}
              </span>
              <button onClick={() => removeFromCart(cart, setCart, item.id)}>
                Remove
              </button>
            </li>
          ))}
        </CartList>
      )}
    </CartContainer>
  );
}

export default Cart;