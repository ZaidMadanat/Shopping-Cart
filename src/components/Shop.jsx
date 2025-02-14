import DisplayShop from './DisplayShop';
import { ShopContainer} from "../styles/Shop.styled";


/**
 Shop component to print out the products as well as a navigation bar for easy website traversal.
 */
 export default function Shop() {
    return (
      <ShopContainer>
        <h1>Shop Our Products</h1>
        <DisplayShop />
      </ShopContainer>
    );
  }