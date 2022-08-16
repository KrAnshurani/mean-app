const { Module } = require("module");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register" , userSchema);
Module.exports = Register;