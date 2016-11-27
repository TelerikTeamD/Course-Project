"use strict";

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    team: {}
});
mongoose.model("FootballPlayer", schema);

module.exports = mongoose.model("FootballPlayer");