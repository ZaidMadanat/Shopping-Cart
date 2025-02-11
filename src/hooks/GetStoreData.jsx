import {useState, useEffect} from "react"; 

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
                setProduct({ 
                   title: data.title, 
                   image: data.image, 
                   rating: data.rating,
                });
            })
            .catch((error) => { 
                setError(error.message); 
            }); 
        }); 

        return {product, error}; 
}; 

export default useStoreAPI;
