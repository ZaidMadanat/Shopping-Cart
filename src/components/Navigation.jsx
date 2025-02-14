import { Link } from "react-router-dom"; 
import { 
    NavContainer, 
    Logo, 
    NavItem, 
    CartNavItem, 
    NavMenu, 
    CartIcon
} from "../styles/Navigation.styled"
import ZaidLogo from "../assets/ZaidMart.png";
import Cart from "../assets/cart-outline.svg";

/* 
Navigation bar for the top to change between each file. 
*/
function NavBar() {
    return (
      <NavContainer>
        <Logo src={ZaidLogo} alt="Zaid Mart" />

        <NavMenu>
          <NavItem>
            <Link to="/Home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/Shop">Shop</Link>
          </NavItem>
          <CartNavItem>
            <Link to="/Cart">
            <CartIcon src={Cart} alt="Cart" />
            </Link>
          </CartNavItem>
        </NavMenu>
      </NavContainer>
    );
  }


export default NavBar; 