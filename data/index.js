"use strict";

const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

module.exports = function(config) {
    mongoose.connect(config.connectionString);

    let data = {};
    let models = {};
    mongoose.Promise = global.Promise;

    fs.readdirSync("./data")
        .filter(file => file.includes("-data"))
        .forEach(file => {
            let dataModule = require(path.join(__dirname, file))(models);
            Object.keys(dataModule)
                .forEach(key => {
                    data[key] = dataModule[key];
                });
        });
    return data;
};