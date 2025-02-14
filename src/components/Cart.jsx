import addToCart from "./addToCart";

export default function Cart() { 
    [cartProducts, setCartProducts] = useState([]); 

    setCartProducts(prevCart => [...prevCart, addToCart])

}