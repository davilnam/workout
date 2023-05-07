const express = require('express')
const dotenv = require('dotenv')
const initWebRoute = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: true }))
app.use(cors())

//connect DB
const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/workout');
        console.log("Connect DB success");
    } catch (error) {
        console.log("Connect DB failed");
    }
}
connect();

// route
initWebRoute(app)


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("server on")
})