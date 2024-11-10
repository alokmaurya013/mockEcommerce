import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation

    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    There was an issue processing your payment. Please try again.
                </p>
                
                {/* Go to Home Button */}
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentFailure;
