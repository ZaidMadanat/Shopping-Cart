import { Link } from "react-router-dom"; 


/* 
Navigation bar for the top to change between each file. 
*/
function NavBar() { 
    return (
        <nav className='navigation'> 
            <ul> 
                <li> 
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Shop">Shop</Link>
                </li>
                <li> 
                    <Link to="/Cart">Cart</Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar; 