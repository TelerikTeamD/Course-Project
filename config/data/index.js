/* globals module */
"use strict";
// For local testing/working
//const dotenv = require('dotenv');
//dotenv.load({ path: '.env.test' });
const connectionString = process.env.MONGODB_URI || process.env.MONGOLAB_URI;
const port = process.env.PORT || 8080;

module.exports = {
    port: port,
    connectionString: connectionString
};