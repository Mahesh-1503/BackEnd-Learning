const express = require('express')
const dotenv  = require('dotenv')
const {MongoClient} = require('mongodb')
const app = express()

const PORT = 5000
dotenv.config()

MongoClient.connect(process.env.MONGO_URI)
.then(() => {
    console.log(`MongoDB connected successfully.`)
})
.catch((error) => {
    console.log(`Error: ${error}`)
})
// console.log(process.env) //global object

app.get('/', (req,res) => {
    res.send(`You are at <h1 style="color: red;">HOME PAGE</h1>`)
})

app.listen(PORT, () => {
    console.log(`server started and running at http://localhost:${PORT}`)
})