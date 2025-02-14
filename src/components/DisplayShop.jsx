import useMultipleProducts from "../hooks/useMultipleProducts";
import { useNavigate } from "react-router-dom";
import {ProductGrid, ProductCard} from "../styles/Shop.styled";

/**
uses custom hook function and displays a list of products using 
the custom hook {@link useMultipleProducts} 
 */
function DisplayShop() {
    const { products, error } = useMultipleProducts({ count: 20 });
    const navigate = useNavigate();
  
    if (error) return <p>Error: {error}</p>;
    if (!products?.length) return <p>Loading...</p>;
  
    return (
      <ProductGrid>
        {products.map((item) => (
          <ProductCard key={item.id} onClick={() => navigate(`/shop/${item.id}`)}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="card-info">
              <h4>Rating: {item.rating?.rate}</h4>
              <h4>Price: ${item.price}</h4>
            </div>
          </ProductCard>
        ))}
      </ProductGrid>
    );
  }
  
  export default DisplayShop;