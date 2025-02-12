import useMultipleProducts from "../hooks/useMultipleProducts";

function CreateShop() { 
    const { products, error} = useMultipleProducts({count: 20});
    if (error) return <p>Error: {error}</p>;

    return ( 
        <div className="shop-container">
            {products.map((item) => (
                <div className="card-shop" key={item.id}> 
                    <img src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <div className="card-info">
                        <h4>Rating: {item.rating?.rate}</h4>
                        <h4>Price: ${item.price}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CreateShop;