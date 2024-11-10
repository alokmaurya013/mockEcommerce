import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate to go back

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div className="text-red-500 text-center mt-6">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Product List</h1>
            
            {/* Back Button */}
            <div className="mb-6">
                <button 
                    onClick={() => navigate(-1)} // Go back to the previous page
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                >
                    Go Back
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div 
                        key={product._id} 
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <Link to={`/products/${product._id}`}>
                            <img src={product.image} alt={product.name} className="h-40 object-contain mb-4"/>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                        </Link>
                        <p className="text-lg font-bold text-gray-900">${product.price}</p>
                        <Link 
                            to={`/products/${product._id}`}
                            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
