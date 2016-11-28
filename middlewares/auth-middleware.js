module.exports = {
    isAuthenticated(req, res, next) {
        if(req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json({
                success: false,
                message: 'Not authorized!'
            });
        }
    },
    isExperienced(experience) {
        return (req, res, next) => {
            if(req.user && req.user.experience.indexOf(experience) !== -1) {
                next();
            } else {
                res.status(401).json({
                    success: false,
                    message: 'Not authorized!'
                });
            }
        }
    }
};