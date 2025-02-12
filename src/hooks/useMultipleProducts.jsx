import { useState, useEffect } from "react";

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