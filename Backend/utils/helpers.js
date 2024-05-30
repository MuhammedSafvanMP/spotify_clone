exports = {}
const jwt = require("jwt");

exports.getToken = (email, user) => {
    const token = jwt.sign({identifier: user._id})
    return token;
}

module.exports = exports;  