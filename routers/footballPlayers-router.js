/* globals module require */
"use strict";

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/footballPlayer-controller")(data);

    let router = new express.Router();

    router
        .get("/", controller.getAll)
        .get("/create", function(req, res) {
            res.render("footballPlayer-create");
        })
        .get("/:name", controller.getByName)
        .post("/", controller.create);

    app.use("/footballPlayers", router);
};