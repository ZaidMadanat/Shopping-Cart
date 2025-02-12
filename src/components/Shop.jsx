import NavBar from './Navigation'; 
import DisplayCard from './DisplayCard';
import createShop from './CreateShop';

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
        {createShop.map((item,index) => 
                <div className="card-shop" key={index}> 
                <img src={item.image} alt={item.title}/>
                <h3>{item.title}</h3>
                <div className="card-info">
                    <h4>Rating: {item.rating}</h4>
                    <h4>Price: {item.price}</h4>
                </div>
                </div>
        )}
        
        </div>
    )
}