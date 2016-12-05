const _ = require('lodash');
const passport = require('passport');
const request = require('request');
//TODO all strategy in different files example : facebook-strategy etc etc
//Here should be only setup
const LocalStrategy = require('passport-local').Strategy;
//const OpenIDStrategy = require('passport-openid').Strategy;
//const OAuthStrategy = require('passport-oauth').OAuthStrategy;
//const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;


const User = require('../../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { msg: `Email ${email} not found.` });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, { msg: 'Invalid email or password.' });
        });
    });
}));
/**
 * Sign in with Facebook.
 */
require('./facebook-strategy')(passport, User);

/**
 * Sign in with LinkedIn.
 */
require('./linkedIn-strategy')(passport, User);

/**
 * Sign in with Google.
 */
require('./google-strategy')(passport, User);

/**
 * Sign in with GitHub.
 */
require('./github-strategy')(passport, User);


/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
    const provider = req.path.split('/').slice(-1)[0];

    if (_.find(req.user.tokens, { kind: provider })) {
        next();
    } else {
        res.redirect(`/auth/${provider}`);
    }
};