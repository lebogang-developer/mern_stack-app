import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json());

// Post route
app.post('/api/products', async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide all required fields!' });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log('Error in create Product: error.message');
    res.status(500).json({ success: true, message: 'Server error' });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log('Server is running on http://localhost:5000');
});
