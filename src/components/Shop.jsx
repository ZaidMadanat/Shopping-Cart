import NavBar from './Navigation'; 
import CreateShop from './CreateShop';

// loop through the first 25 Items and display them. 
// Create a Grid in CSS to display three display Cards? 
/*  
*/
// Create hooks/helpers for different filters and add that as an option for the right hand side. 
// 

export default function Shop() { 
    return ( 
        <div className="Shop"> 
        <NavBar />
        <CreateShop />
        </div>
    )
}