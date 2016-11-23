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

module.exports = mongoose.model("Model");