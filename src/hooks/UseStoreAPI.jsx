import {useState, useEffect} from "react"; 

/**
Fetches one product and assigns it product as an object with 
properties id, title, image, rating, price, description. 
 */
const useStoreAPI = ({id}) => { 
    const [product, setProduct] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => { 
        if (!id) return;

        fetch(`https://fakestoreapi.com/products/${id}`, {mode: "cors"})
            .then((response) => { 
                if(response.status >= 400) { 
                    throw new Error("server error");
                }
                return response.json();
            }) 
            .then((data) => { 
                console.log(data);
                setProduct({ 
                   id: data.id, 
                   title: data.title, 
                   image: data.image, 
                   rating: data.rating.rate,
                   price: data.price, 
                   description: data.description,
                });
            })
            .catch((error) => { 
                setError(error.message); 
            }); 
        }, [id]); 

        return {product, error}; 
}; 

export default useStoreAPI;
