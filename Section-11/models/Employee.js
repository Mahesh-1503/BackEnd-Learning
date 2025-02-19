const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    //name, email, phone, city
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:false
    },
    city:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('Employee', employeeSchema)