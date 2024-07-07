const express = require('express')
const cors = require('cors')
const app = express()

require("dotenv").config()

const config = require("./config.json")
const mongoose = require("mongoose")
const User= require("./models/user_models")
 mongoose.connect(config.connectionString)

 const jwt = require("jsonwebtoken")
 const{authenticateToken}  = require("./utilities")

app.use(express.json())

app.use(
    cors({
        origin: '*',
    }))

app.get('/',(req,res)=>{
    res.json({data: "hello"})
})


app.post("/create-accont", async (req,res)=>{
    const {fulname, email, password} = req.body

    if(!fullName)
    {
        return res
        .status(400)
        .json({error: true, message:"Full Name is requires"})
    }
    if(!email)
    {
        return res
        .status(400)
        .json({error: true, message:" Email is requires"})
    }
    if(!password)
    {
        return res
        .status(400)
        .json({error: true, message:" password is requires"})
    }

    
})



app.listen(3115)

module.exports = app