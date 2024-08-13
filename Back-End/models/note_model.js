const mongoose = require('mongoose')

const noteSchemas = new mongoose.Schema({
    title:{type:String, required:true},

    content:{type:String, required:true},

    tags:{type:[String],default:[]},

    isPinned: {
        type: Boolean,
        default: false,
    },

    userId: {type:String, required:true},

    createOn: {type:Date, default:new Date().getTime()},

})


module.exports = mongoose.model("Notes", noteSchemas)