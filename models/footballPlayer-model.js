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
    position: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    nation: {
        type: String,
        required: true
    }
});
mongoose.model("FootballPlayer", schema, "players");

module.exports = mongoose.model("FootballPlayer");