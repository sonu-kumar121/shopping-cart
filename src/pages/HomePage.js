import React from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

function HomePage() {
  const { addToCart } = useCart(); // Get addToCart function from context
  const products = [
    { 
      id: 1, 
      name: 'Running Shoes', 
      price: 20, 
      image: '/assets/shoes(5).jpg',
      description: 'Comfortable running shoes for daily joggers.'
    },
    { 
      id: 2, 
      name: 'Basketball Shoes', 
      price: 30, 
      image: '/assets/shoes(6).jpeg',
      description: 'Durable basketball shoes for professional games.'
    },
    { 
      id: 3, 
      name: 'Casual Sneakers', 
      price: 25, 
      image: '/assets/shoes(7).jpg',
      description: 'Stylish sneakers perfect for casual outings.'
    },
    { 
      id: 4, 
      name: 'Formal Leather Shoes', 
      price: 35, 
      image: '/assets/shoes2.png',
      description: 'Elegant leather shoes for formal occasions.'
    },
    { 
      id: 5, 
      name: 'Sports Shoes', 
      price: 40, 
      image: '/assets/shoes4.webp',
      description: 'High-performance shoes designed for athletes.'
    },
    { 
      id: 6, 
      name: 'Outdoor Hiking Shoes', 
      price: 50, 
      image: '/assets/shoes(2).jpg',
      description: 'Durable shoes for outdoor adventures and hiking.'
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}

export default HomePage;
