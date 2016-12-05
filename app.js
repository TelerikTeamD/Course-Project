/* globals require console */
"use strict";

const config = require("./config/data");

const app = require("./config/application");
const data = require("./data")(config);
const passport = require('passport');
const errorHandler = require('errorhandler');
const passportConfig = require('./config/passport/index');
const cool = require('cool-ascii-faces');



require("./routers")(app, data);
require('./config/routes/routes')(app, passport, passportConfig);


app.use(errorHandler());

app.listen(config.port, () => {
    console.log(`Running app at port ${config.port}`)
});