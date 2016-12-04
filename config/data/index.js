/* globals module */
"use strict";
const dotenv = require('dotenv');
dotenv.load({ path: '.env.test' });
const connectionString = process.env.MONGODB_URI || process.env.MONGOLAB_URI ;

module.exports = {
    port: 3333,
    connectionString: connectionString
};