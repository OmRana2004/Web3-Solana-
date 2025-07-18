
const mongoose = require("mongoose");

mongoose.connect()

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    privateKey: String,
    publlicKey: String
})

const userModel = mongoose.Model("users", UserSchema);

model.exports = {
    userModel
}