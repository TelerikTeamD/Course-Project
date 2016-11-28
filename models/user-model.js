'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 4,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    experience: {
        type: [String],
        default: ['standard']
    }
});

mongoose.model('User', userSchema);

let userModel =  mongoose.model('User');

module.exports = userModel;
