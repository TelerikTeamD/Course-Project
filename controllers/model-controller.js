module.exports = function(data) {
    return {
        getAll(req, res) {
            data.getAllModel()
                .then(model => {
                    res.render("model-list", {
                        result: model
                    });
                });
        },
        getById(req, res) {
            data.getModelById(req.params.id)
                .then(model => {
                    if (model === null) {
                        return res.status(404)
                            .redirect("/error");
                    }

                    return res.render("model-details", {
                        result: model
                    });
                });
        },
        create(req, res) {
            let body = req.body;
            data.createModel(body.name, body.age, body.address)
                .then(() => {
                    res.redirect("/model");
                });
        }
    };
};