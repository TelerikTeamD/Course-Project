"use strict";

const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    yearFounded: {
        type: Number,
        required: true
    },
    manager: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    },
    stadiumName: {
        type: String,
        required: true
    },
    urlImage: {
        type: String,
        required: true
    }
});
mongoose.model("Team", schema, "teams");

module.exports = mongoose.model("Team");