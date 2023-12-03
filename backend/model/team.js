const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
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

const Team = mongoose.model("team", teamSchema);


module.exports=Team
