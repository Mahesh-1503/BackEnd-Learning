const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
const app = express();
dotenv.config();
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log(`MongoDB Connected Successfully......😇`)
})
.catch((error) => {
    console.log(`Error:${error}`)
})

app.use('/employees', employeeRoutes)

// app.get('/', (req,res) => {
//     res.send(`Welcome Home Page!`)
// })


app.listen(PORT, () => {
    console.log(`server started and running at http://localhost:${PORT}`)
})

// start watching from 11:00  