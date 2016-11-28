/* globals module require global __dirname */
"use strict";

const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

module.exports = function(config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.connectionString);

    let FootballPlayer = require("../models/footballPlayer-model");
    let models = { FootballPlayer };
    let data = {};

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