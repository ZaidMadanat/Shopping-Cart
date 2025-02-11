import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing the nav bar
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';

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
    path: "/Cart", 
    element: <Cart />,
  },
]); 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
