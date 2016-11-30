/* globals module require */
"use strict";

const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/static", express.static("public"));

module.exports = app;