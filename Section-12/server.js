const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

//connect to database
connectToDB();

//middleware -> express.json() -> parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

//routes here
app.use('/api/books', bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 4:04