/* globals module require */
"use strict";

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/footballPlayer-controller")(data);

    let router = new express.Router();

    router
        .get("/", function(req, res) {
            res.render("playersDB");
        })
        .get("/create", function(req, res) {
            res.render("footballPlayer-create");
        })
        .get("/:name", controller.getByName)
        .post("/create", controller.create)
        .get("/list", controller.getAll);

    app.use("/footballPlayers", router);
};