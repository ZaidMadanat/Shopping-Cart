import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing the nav bar
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import ProductSingle from './components/ProductSingle.jsx'

const router = createBrowserRouter([ 
  { 
    path: "/", 
    element: <App />, 
  },
  { 
    path: "/Home", 
    element: <App />,
  }, 
  { 
    path: "/Shop", 
    element: <Shop />, 
  }, 
  { 
    path: "/Shop/:id",
    element: <ProductSingle />,
  },
  { 
    path: "/Cart", 
    element: <Cart />,
  },
]); 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
