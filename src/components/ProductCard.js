import React, { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false); // To manage added state

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true); // Set item as added
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className={`mt-4 py-2 px-4 rounded-full ${
          isAdded ? 'bg-green-500' : 'bg-blue-500'
        } text-white`}
        disabled={isAdded} // Disable button once item is added
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
