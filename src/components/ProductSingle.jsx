import { useParams } from "react-router-dom";
import NavBar from "./Navigation";
import HandleBuy from "../helpers/handlebuy";
import useStoreAPI from "../hooks/UseStoreAPI";



// Route to ID, have NAVBAR up top to return to shop. 
// Once the image or title is clicked we return  
// IMG, TITLE, DESCRIPTION, PRICE, RATING, BUY NOW BUTTON 
// ADD HANDLER FOR BUY NOw button so that once pressed update cart to one. 
// once buy now button change to have [- (num) +] 
// Cart button once pressed will have the data saved. 
// so in productSingle we will have to print out the correct html of the page
// and for the onclick handling of buy we need to save the item in the cart 
// when - is pressed we will handle that by reducing the count 
//--------------------------------------------------------------------------

function ProductSingle() {
    let {id} = useParams();
    console.log(id);
    id = Number(id);
    console.log("This is the new number: " + id);

    const { product, error } = useStoreAPI({id});

    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading...</p>;
    
    return ( 
        <>
        <NavBar />
        <div className="card-full">
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="card-buy"> 
                <h4>Price: ${product.price}</h4>
                <button onClick={HandleBuy}>Add to Cart</button>
            </div>
        </div>
        </>
    )

}

export default ProductSingle; 