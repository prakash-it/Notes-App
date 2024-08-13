const mongoose = require("mongoose")

const schema = mongoose.schema

const userSchemas = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    createOn:{type:Date, default:new Date().getTime()}
})

module.exports = mongoose.model("User", userSchemas)