const express = require('express');
require('dotenv').config(); //Load .env file
const app = express();

//Access environment variables
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`)
});