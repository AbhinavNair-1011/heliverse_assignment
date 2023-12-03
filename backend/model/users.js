const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: {
        type: "string",

    },
    last_name: {
        type: "string",

    },
    email: {
        type: "string",

    },
    gender: {
        type: "string"
    },
    avatar: {
        type: "string"
    },
    domain: {
        type: "string"
    },
    available: {
        type: "string"
    }
})

const Users = mongoose.model("users", userSchema);


module.exports=Users
