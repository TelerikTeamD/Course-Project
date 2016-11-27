"use strict";
const LocalStrategy = require('passport-local');
const data = require('../../data/index');
// Passport starting-strategy
const authStrategy = new LocalStrategy(
    function (username, password, done) {

    }
)