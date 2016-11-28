'use strict';

const crypt = require('crypto');

module.exports = {
    generateSalt() {
        return crypt.randomBytes(128).toString('base64');
    },
    hashPassword(salt, password) {
        const hmac = crypt.createHmac('sha1', salt);
        return hmac.update(password).digest('hex');
    }
};
