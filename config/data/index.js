/* globals module */
"use strict";

const connectionString = process.env.MONGODB_URI || process.env.MONGOLAB_URI;
// let port be set by heroku
const port = process.env.PORT || 8080;

module.exports = {
    port: port,
    connectionString: connectionString
};