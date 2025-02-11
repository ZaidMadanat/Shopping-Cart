import { Link } from "react-router-dom"; 


/* 
Navigation bar for the top to change between each file. 
*/
function NavBar() { 
    return (
        <div className="Navigation-Fixed">
            <img src="./assets/ZaidMart.png" alt="Zaid Mart" className="Logo"></img>
            <nav className='navigation'> 
                <ul> 
                    <li> 
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Shop">Shop</Link>
                    </li>
                    <li className="Shopping_Cart"> 
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar; 