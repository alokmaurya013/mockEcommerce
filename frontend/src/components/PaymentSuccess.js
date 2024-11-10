import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for your purchase. Your transaction has been completed successfully.
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

export default PaymentSuccess;
