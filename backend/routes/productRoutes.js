const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

// GET all products
router.get('/', getAllProducts);

// GET product by ID
router.get('/:id', getProductById);

// POST create a new product
router.post('/', createProduct);

// PUT update an existing product
router.put('/:id', updateProduct);

// DELETE remove a product
router.delete('/:id', deleteProduct);

module.exports = router;
