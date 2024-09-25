import express from 'express';

const app = express();

// Get route
app.get('/products', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});