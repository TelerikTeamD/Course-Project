/* globals module */
"use strict";

const protocol = "mongodb:/";
const server = "localhost:27017";
const databaseName = "FootballManagerDB";
const connectionString = `${protocol}/${server}/${databaseName}`;

module.exports = {
    port: 3333,
    connectionString: connectionString
};