/* globals module require */

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/footballPlayer-controller")(data);

    let router = new express.Router();

    router
        .get("/footballPlayers", controller.getAll)
        .get("/footballPlayers:id", controller.getById)
        .post("/footballPlayers", controller.create);

    app.use("/footballPlayers", router);
};