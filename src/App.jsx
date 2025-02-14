import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProvideCart from "./context/ProvideCart"
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import ProductSingle from "./components/ProductSingle";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
    return (  
      <ProvideCart>
          <Router>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Shop/:id" element={<ProductSingle />} />
                  <Route path="/Cart" element={<Cart />} />
              </Routes>
          </Router>
      </ProvideCart>
    );
}

export default App;