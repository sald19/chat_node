var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	message: String,
	user: {
		name: String
	} 
});

var message = mongoose.model('message', messageSchema);
module.exports = message;