import { useParams } from "react-router-dom";
import HandleBuy from "../helpers/handlebuy.jsx";
import useStoreAPI from "../hooks/UseStoreAPI";



// Route to ID, have NAVBAR up top to return to shop. DONE
// Once the image or title is clicked we return  DONE
// IMG, TITLE, DESCRIPTION, PRICE, RATING, BUY NOW BUTTON All DONE 
// In HandleBuy display a small pop up added to cart. 
// Add to card functionality we have to create an array that takes in the data from the store API so we will pass in the ID 
// from the data and then put in in an array and then map to the cart. 
// Inside Cart we will have the Name of the item class: card-buy 
// Price and total price 
// Button to add/ subtract ammount 
//--------------------------------------------------------------------------

/**
 Returns each product's details along with a dynamic add to card button {@link HandleBuy}
 * @returns 
 */
function ProductSingle() {
    [isVisible, setVisible] = useState(false);
    let {id} = useParams();

    const { product, error } = useStoreAPI({id});

    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading...</p>;
    
    return ( 
        <>
        {isVisible && <div className="visible">Added to Cart!</div> }
        <div className="card-full">
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="card-buy"> 
                <h4>Price: ${product.price}</h4>
                <button onClick={() => HandleBuy({product, setVisible})}>Add to Cart</button>
            </div>
        </div>
        </>
    )

}

export default ProductSingle; 