var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	color: String
});

var user = mongoose.model('User', UserSchema);
// user.find({});
// var carlos = new user({
// 	name: 'Carlos'
// });

// console.log(carlos);
// carlos.save(function (err, name) {
// 	if (err) console.log('err', err);
// 	console.log('name', name);
// });

// var a = user.find(function (err, user) {
// 	console.log('user', user);
// });
module.exports = user;