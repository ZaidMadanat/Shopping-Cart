import useStoreAPI from "../hooks/UseStoreAPI";
import { CardContainer } from "../styles/DisplayCard.styled";
/** 
 Displays a product on the home page 
 using the useStoreAPI function component 
 returning the product in title-image-rating format
*/
function DisplayCard({ id }) {
    const { product, error } = useStoreAPI({ id });
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading...</p>;
  
    return (
      <CardContainer>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h4>Rating: {product.rating}</h4>
      </CardContainer>
    );
  }
  
  export default DisplayCard;
