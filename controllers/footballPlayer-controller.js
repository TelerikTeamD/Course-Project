module.exports = function(data) {
    return {
        getAll(req, res) {
            data.getAllFootballPlayers()
                .then(players => {
                    res.render("footballPlayers-list", {
                        result: players
                    });
                });
        },
        getByName(req, res) {
            data.getfootballPlayerByName(req.params.name)
                .then(footballPlayer => {
                    if (footballPlayer === null) {
                        return res.status(404)
                            .redirect("/error");
                    }

                    return res.render("footballPlayers-details", {
                        result: footballPlayer
                    });
                });
        },
        create(req, res) {
            let body = req.body;
            data.createfootballPlayer(body.name, body.age, body.team)
                .then(() => {
                    res.redirect("/footballPlayers");
                });
        }
    };
};