import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import productsRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/products/', productsRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on http://localhost:'+ PORT);
});
