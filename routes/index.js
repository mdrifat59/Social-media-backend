const express = require("express");
const router = express.Router();


router.get('/', (req, res)=>{
    console.log("this is from route api")
})


module.exports=router