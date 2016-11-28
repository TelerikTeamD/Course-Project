const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {},
    address: {}
});

mongoose.model("Model", schema);

let model = mongoose.model("Model");

module.exports = model;