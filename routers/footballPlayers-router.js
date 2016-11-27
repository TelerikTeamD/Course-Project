/* globals module require */

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/footballPlayer-controller")(data);

    let router = new express.Router();

    router
        .get("/", controller.getAll)
        .get("/:name", controller.getByName)
        .post("/", controller.create);

    app.use("/footballPlayers", router);
};