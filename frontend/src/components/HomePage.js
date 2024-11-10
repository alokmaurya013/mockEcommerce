import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                Welcome to Mock E-commerce Site
            </h1>
            <p className="text-lg md:text-xl mb-4 text-center">
                Your one-stop shop for all your needs!
            </p>
            <Link 
                to="/products" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                View Products
            </Link>
        </div>
    );
};

export default HomePage;
