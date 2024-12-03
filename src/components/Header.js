import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold">
          <Link to="/">E-Commerce</Link>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/shop" className="text-white hover:text-gray-400">Shop</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-l-md"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>

        {/* Cart and User Authentication */}
        <div className="space-x-4">
          <Link to="/cart" className="text-white hover:text-gray-400">Cart</Link>
          <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
