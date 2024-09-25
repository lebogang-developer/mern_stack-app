import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import productsRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/products/', productsRoutes);

app.listen(5000, () => {
  connectDB();
  console.log('Server is running on http://localhost:5000');
});
