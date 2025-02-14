import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import HandleBuy from "../helpers/handlebuy.jsx";
import useStoreAPI from "../hooks/UseStoreAPI";
import CartContext from "../context/CartContext.jsx";
import {
    ProductCard,
    Popup
  } from "../styles/ProductSingle.styling.js";
  
/**
 Returns each product's details along with a dynamic add to card button {@link HandleBuy}
 * @returns 
 */
 function ProductSingle() {
    let { id } = useParams();
    const [isVisible, setVisible] = useState(false);
    const { product, error } = useStoreAPI({ id });
    const { setCart, addToCart } = useContext(CartContext);
  
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading...</p>;
  
    return (
      <>
      {isVisible && <Popup>Added to Cart!</Popup>}

      <ProductCard>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="card-buy">
          <h4>Price: ${product.price}</h4>
          <button onClick={() => HandleBuy({ product, setVisible, addToCart, setCart })}>
            Add to Cart
          </button>
        </div>
      </ProductCard>
    </>
    );
  }
  
  export default ProductSingle;