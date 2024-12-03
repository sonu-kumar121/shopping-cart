import React from 'react';
import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border p-4 rounded-lg shadow-md">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
      <div className="flex-grow ml-4">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price}</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2">{item.quantity}</span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
