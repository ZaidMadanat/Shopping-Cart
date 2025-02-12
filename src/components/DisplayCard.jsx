import useStoreAPI from "../hooks/UseStoreAPI";

function DisplayCard({id}) { 
    const {product, error} = useStoreAPI({id}); 
    if (error) return <p>Error: {error} </p>;
    if (!product) return <p>Loading...</p>; 

    return ( 
        <div className="card"> 
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}/>
        <h4>Rating: {product.rating}</h4>
        </div>
    ); 
}

export default DisplayCard; 

