import useStoreAPI from "../hooks/UseStoreAPI";

function createShop() { 
    items = []; 
    for (let i=0; i<20; i++) { 
        items.push(useStoreAPI({i}));
    }
    console.log(items); 
    return ( 
        <div className="card-shop"> 
        <img src={product.image} alt={product.title}/>
        <h3>{product.title}</h3>
        <div className="card-info">
            <h4>Rating: {product.rating}</h4>
            <h4>Price: {product.price}</h4>
        </div>
        </div>
    ); 
}

export default createShop; 