/* globals module require */
"use strict";

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/footballPlayer-controller")(data);

    let router = new express.Router();

    router
    // controller.getAll
        .get("/", (req, res) => {
            data.getAllFootballPlayers()
                .then(players => {
                    res.render("footballPlayers-list", {
                        result: players
                    });
                });
        })
        .get("/:name", controller.getByName)
        .post("/", controller.create);

    app.use("/footballPlayers", router);
};