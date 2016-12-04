'use strict';

const request = require('request');

exports.getPrizes = (req, res) => {
    res.render('prizes/index', {
        title: 'Prizes'
    });
};