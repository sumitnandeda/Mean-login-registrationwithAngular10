//required modules

//express module
const express = require("express");
const router  = express.Router();
const session = require('express-session');
const bcrypt     = require('bcrypt');

//path module for urls
const path = require('path');

//create express instance
const app = express();

//database configuration module and schemas
var userSchema     = require('../models/user');

//use the session middleware
router.use(session({
		secret           : "hgenie",
		resave           : false,
		saveUninitialized: false,
		cookie           : {maxAge: 3600000}
	}),
);

/* routes : from below we are defining routes for the application.
* each route will be responsible for load page or performer crud operation
*/

//route for post UserData into user DB
router.post("/register",(req, res) => {
	console.log(req.body);
	
	userSchema.user.find({UserName: req.body.username}, function(err, user)
	{
		if (err) throw err;

		//check user record
		if(user.length)
		{
			res.send({status:400, message:'This Username is already taken. Please choose another username.'});
		}
		else
		{
			const encryptedPassword = bcrypt.hashSync(req.body.password, 10);	
				//create a new user data
			let newUser = userSchema.user({
				UserName	   : req.body.username,
				Email		   : req.body.email,
				Password	   : encryptedPassword,
				Status         : "1",
			});
			newUser.save()
			.then(userResponse => {
				console.log(userResponse)
				res.send({status:200,message:"Create user successfully", html:userResponse});
			})
			.catch(err => {
				res.send({status:400,message:"Unable to create user.Something went wrong"});
			});	
		}
	});
});

//route for get user by UserName
router.post("/login",(req, res) => {
console.log(req.body);

const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
	//first check into user table
	userSchema.user.find({UserName: req.body.username}, function(err, user)
	{console.log(user)
		if (err) throw err;
		
		//check user record
		if (user.length > 0)
		{
			//compare password with db
			if(bcrypt.compareSync(req.body.password,encryptedPassword ))
			{
				res.send({status:200, html:user});
			}
			else
			{
				res.send({status:400, message:"Credential are wrong"});
			}
		}
		else
		{
			res.send({status:404, message:"No user with this username"});
		}
	});
});

//export module
module.exports = router;