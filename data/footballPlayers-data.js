/* globals module Promise */
"use strict";

module.exports = function(models) {
    let FootballPlayer = models.FootballPlayer;

    return {
        getAllFootballPlayers() {
            return new Promise((resolve, reject) => {
                FootballPlayer.find((err, players) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(players);
                });
            });
        },
        getfootballPlayerByName(name) {
            return new Promise((resolve, reject) => {
                FootballPlayer.findOne({ name: name }, (err, footballPlayer) => {
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