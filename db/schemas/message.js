var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    message: String,
    user: {
        name: String
    } 
});