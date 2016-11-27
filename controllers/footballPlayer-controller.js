module.exports = function(data) {
    return {
        getAll(req, res) {
            data.getAllfootballPlayers()
                .then(footballPlayers => {
                    res.render("footballPlayers-list", {
                        result: footballPlayers
                    });
                });
        },
        getById(req, res) {
            data.getfootballPlayerById(req.params.id)
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