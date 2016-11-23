const path = require("path");
const fs = require("fs");

module.exports = function(app, data) {
    fs.readdirSync("./routers")
        .filter(file => file.includes("-router"))
        .forEach(file => {
            require(path.join(__dirname, file))(app, data);
        });
};