var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: String,
    color: String
});

// user.find({});
// var carlos = new user({
//  name: 'Carlos'
// });

// console.log(carlos);
// carlos.save(function (err, name) {
//  if (err) console.log('err', err);
//  console.log('name', name);
// });

// var a = user.find(function (err, user) {
//  console.log('user', user);
// });