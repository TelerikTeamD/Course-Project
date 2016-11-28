"use strict";

const hashing = require('../utils/hashing');

module.exports = function (User) {
    return {
        //TODO refactor findByUsername
        findByUsername(username) {
            return User.findOne({ username });
        },
        createUser(user) {

            const salt = hashing.generateSalt(),
                passHash = hashing.hashPassword(salt, user.password);

            const newUser = {
                username: user.username,
                experience: user.experience,
                salt,
                passHash
            };
            return new Promise((res,rej)=> {
                newUser.save((err)=>{
                    if(err) {
                        return rej(err)
                    }
                    return res(newUser);
                });
            });
        }
    }
};