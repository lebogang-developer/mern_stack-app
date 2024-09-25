import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';

dotenv.config();

const app = express();

// Get route
app.get('/products', (req, res) => {
});

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on http://localhost:5000');
});

