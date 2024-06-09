const dotenv = require('dotenv')
dotenv.config()
const { connect }=require('./database/dbConfig')
const express =require("express")
const cors =require("cors")
const router = require("./routes")


// database connect function
    connect()

// express and middleware
const app=express()
app.use(cors())
app.use(router)

 

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log("This is node js like")
})