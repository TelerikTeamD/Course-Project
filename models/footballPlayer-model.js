"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String
    },
    team: {
        type: String,
        required: true
    },
    nation: {
        type: String
    },
    rating: {
        type: Number
    },
    urlImage: {
        type: String
    }
});
mongoose.model("FootballPlayer", schema, "players");
const footballPlayer = mongoose.model("FootballPlayer");
module.exports = footballPlayer;