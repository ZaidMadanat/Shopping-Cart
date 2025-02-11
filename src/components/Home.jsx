import displayCard from "./DisplayCard"; 

export default function Home() { 
    return ( 
        <div className="HomePage"> 
            <h1>Welcome to Zaid Mart!</h1>
            <p>This is your place to shop for all your needs.</p>
            <h2>Take a look at our brand new selection</h2>
            <div className="NEW">
                <displayCard id={1}/> 
                <displayCard id={2}/> 
                <displayCard id={3}/>  
            </div>
        </div>
    )
}

