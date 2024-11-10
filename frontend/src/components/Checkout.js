import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate(); // Initialize navigate for back button

    const handlePaymentSuccess = () => {
        // Simulate payment success
        window.location.href = '/payment-success';
    };

    const handlePaymentFailure = () => {
        // Simulate payment failure
        window.location.href = '/payment-failure';
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Checkout</h1>
                
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={handlePaymentSuccess} 
                        className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        Pay Now
                    </button>
                    <button 
                        onClick={handlePaymentFailure} 
                        className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Cancel Payment
                    </button>
                </div>

                {/* Back Button */}
                <div className="mt-6">
                    <button
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 w-full"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
