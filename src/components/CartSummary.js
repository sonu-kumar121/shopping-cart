import React from 'react';
import { useCart } from '../context/CartContext';

function CartSummary() {
  const { cartItems } = useCart();
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">Cart Summary</h3>
      <p className="mt-2">Subtotal: ${subtotal.toFixed(2)}</p>
      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md w-full">
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
