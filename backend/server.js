import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Get route
app.get('/products', (req, res) => {
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

