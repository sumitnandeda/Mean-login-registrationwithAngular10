//database configuration module

//mongoose module
const mongoose = require('mongoose');

//set debug log
mongoose.set('debug', true);

//create user schema for usage
var userSchema = mongoose.Schema({
	UserId        : String,
	UserName     : String,
	Email         : {
			type  : String,
			unique: true
		},
	Password   : String,
	Status        : String
},{
	timestamps: true,
	collection: 'user' 
});

var user = mongoose.model('user', userSchema);

//export module
module.exports = {
	user
};