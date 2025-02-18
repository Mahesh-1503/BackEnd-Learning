const express = require('express');
const app = express();
const port = 3000;

// Simple middleware function
const simpleMiddleware = (req, res, next) => {
    console.log('Middleware executed!');
    next(); // Pass control to the next function
};


app.get('/', (req, res) => {
    res.send('Welcome Home!');
});

// Apply middleware to a specific route
app.get('/hello', simpleMiddleware, (req, res) => {
    res.send('Hello, World!');
});


// Another route without middleware
app.get('/home', (req, res) => {
    res.send('Welcome Second Home!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
