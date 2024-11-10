const Order = require('../models/orderModel');
const Product = require('../models/productModel'); 

const createOrder = async (req, res) => {
  try {
    const { products, paymentStatus } = req.body; 
    let totalAmount = 0;

    for (const item of products) {
      const product = await Product.findById(item.product);      
      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.product} not found` });
      }
      totalAmount += product.price * item.quantity;
    }

    const newOrder = new Order({
      products: products.map((item) => ({
        product: item.product,
        quantity: item.quantity,
      })),
      totalAmount,
      paymentStatus,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Send response
    res.status(201).json({ message: 'Order created successfully', order: savedOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error });
  }
};

module.exports = { createOrder };
