import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);  // Discount state

  // Add item to cart
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      // If the item already exists, increment the quantity
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      // Otherwise, add the item to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Adjust the quantity
  const adjustQuantity = (productId, quantity) => {
    const updatedItems = cartItems.map(item => 
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  // Apply discount to cart total
  const applyDiscount = (percent) => {
    setDiscount(percent);
  };

  // Calculate the total price with discount
  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total - (total * discount) / 100;  // Applying the discount
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, adjustQuantity, applyDiscount, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
