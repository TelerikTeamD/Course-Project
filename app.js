"use strict";

const config = require("./config");

const app = require("./config/application");
const data = require("./config/data");

require("./routers")(app, data);

app.listen(config.port, () => console.log(`Running app at port {config.port}`));