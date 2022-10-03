const express = require('express')
const app = express()

const routesUrls = require('./routes/routes')

//

const mongoose = require('mongoose')

require('dotenv').config()

const methodOverride = require('method-override')

//

app.use(express.urlencoded({extended: false}))

app.use(methodOverride("_method"))

//

app.use((req, res, next) => {
  console.log('I run on all routes')
  next()
})

///

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
  console.log("connected to mongodb")
})

app.get('/server', (req, res) => {
  res.send("Connected to Express Server")
})

app.listen('5000', () =>{
  console.log("Server Listening on Port 5000")
})