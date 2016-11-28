/* globals module require */

const express = require("express");

module.exports = function(app, data) {

    let router = new express.Router();

    router
        .get("/", function(req, res) {
            res.render("home");
        });

    app.use("/", router);
};