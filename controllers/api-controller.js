'use strict';

const async = require('async');
// es6-request methods
const request = require('request');
// An http request module sending back a Cheerio object. Parsing, manipulating, and rendering are incredibly efficient.
// const cheerio = require('cheerio'); //TODO test cheerio
// Module to access the facebook graph api
const graph = require('fbgraph');
const GitHub = require('github');
const Linkedin = require('node-linkedin')(process.env.LINKEDIN_ID, process.env.LINKEDIN_SECRET, process.env.LINKEDIN_CALLBACK_URL);

/**
 * GET /api
 * List of API examples.
 */

exports.getApi = (req, res) => {
    res.render('api/index', {
        title: 'API Examples'
    });
};

// GET /api/facebook

exports.getFacebook = (req, res, next) => {
    const token = req.user.tokens.find(token => token.kind === 'facebook');
    graph.setAccessToken(token.accessToken);
    graph.get(`${req.user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err, results) => {
        if (err) { return next(err); }
        res.render('api/facebook', {
            title: 'Facebook API',
            profile: results
        });
    });
};

/**
 * GET /api/github
 * GitHub API Example.
 */
exports.getGithub = (req, res, next) => {
    const github = new GitHub();
    github.get({ user: 'pepchon', repo: 'TelerikTeamD' }, (err, repo) => {
        if (err) { return next(err); }
        res.render('api/github', {
            title: 'GitHub API',
            repo
        });
    });
};

/**
 * GET /api/linkedin
 * LinkedIn API example.
 */

exports.getLinkedin = (req, res, next) => {
    const token = req.user.tokens.find(token => token.kind === 'linkedin');
    const linkedin = Linkedin.init(token.accessToken);
    linkedin.me((err, $in) => {
        if (err) { return next(err); }
        res.render('api/linkedin', {
            title: 'LinkedIn API',
            profile: $in
        });
    });
};

