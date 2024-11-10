const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
