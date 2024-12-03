import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import App from './App';
import { CartProvider } from './context/CartContext';  // Importing CartContext
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Wrapping the App in BrowserRouter to enable React Router */}
    <CartProvider>  {/* Wrapping the App in CartProvider to manage cart state */}
      <App />
    </CartProvider>
  </BrowserRouter>
);
