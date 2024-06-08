const dotenv = require('dotenv')
dotenv.config()
const express =require("express")
const cors =require("cors")
const router = require("./routes")

const app=express()
app.use(cors())
app.use(router)

app.get('/', (req, res)=>{
    res.send("this is home page")
})

const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log("This is node js like")
})