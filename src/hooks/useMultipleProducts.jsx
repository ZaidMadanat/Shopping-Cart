import { useState, useEffect } from "react";

/**
fetches multiple products from fakestoreAPI and then puts in a products array takes effect once count is changed
returns the product as an array of objects and error.
 */
function useMultipleProducts({ count }) { 
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(null); 

    useEffect(() => { 
        fetch(`https://fakestoreapi.com/products?limit=${count}`, { mode: "cors" })
            .then((response) => { 
                if (response.status >= 400) { 
                    throw new Error("Server error"); 
                }
                return response.json(); 
            })
            .then((data) => { 
                setProducts(data); 
            })
            .catch((error) => { 
                setError(error.message);
            });
    }, [count]); 

    return { products, error }; 
}

export default useMultipleProducts;