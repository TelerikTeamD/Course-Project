/* globals module Promise */
"use strict";

module.exports = function(models) {
    let FootballPlayer = models.FootballPlayer;

    return {
        getAllFootballPlayers() {
            return new Promise((resolve, reject) => {
                FootballPlayer.find((err, footballPlayers) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(footballPlayers);
                });
            });
        },
        getFootballPlayerById(id) {
            return new Promise((resolve, reject) => {
                FootballPlayer.findOne({ _id: id }, (err, footballPlayer) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(footballPlayer);
                });
            });
        },
        createFootballPlayer(name, age, team) {
            let footballPlayer = new FootballPlayer({
                name,
                age,
                team
            });

            return new Promise((resolve, reject) => {
                footballPlayer.save(err => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(footballPlayer);
                });
            });
        }
    };
};