import useStoreAPI from "../hooks/GetStoreData";

function displayCard({id}) { 
    const {product, error} = useStoreAPI({id}); 
    if (error) return <p>Error: {error} </p>;
    if (!product) return <p>Loading...</p>; 

    return ( 
        <div className="card"> 
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title}/>
        <h3>Rating: {product.rating}</h3>
        </div>
    ); 
}

export default displayCard; 

