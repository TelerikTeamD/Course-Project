/* globals require console */
"use strict";

const config = require("./config/data");

const app = require("./config/application");
const data = require("./data")(config);

require("./routers")(app, data);

app.listen(config.port, () => {
    console.log(`Running app at port ${config.port}`)
});