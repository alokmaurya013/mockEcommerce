import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate(); // Initialize navigate for back button

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) return <div className="text-center text-lg font-medium text-gray-600">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-72 object-contain rounded-md shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 md:ml-8">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
                        <p className="text-xl font-bold text-gray-900 mb-6">Price: ${product.price}</p>

                        <Link 
                            to="/checkout" 
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8">
                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
