import mongoose from "mongoose";
//const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model.model('users', UserSchema)
module.exports = UserModel