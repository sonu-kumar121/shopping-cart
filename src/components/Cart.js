import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};

export default Cart;
