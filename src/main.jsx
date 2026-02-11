import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router';
import App from './App.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'shop', element: <Shop />},
      {path: 'cart', element: <Cart />}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
