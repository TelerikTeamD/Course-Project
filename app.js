/* globals require console */
"use strict";

const config = require("./config/data");

const app = require("./config/application");
const data = require("./data")(config);

const userController = require('./controllers/user-controller');
const apiController = require('./controllers/api-controller');


require("./routers")(app, data);

app.get('/login', userController.getLogin);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);

app.listen(config.port, () => {
    console.log(`Running app at port ${config.port}`)
});