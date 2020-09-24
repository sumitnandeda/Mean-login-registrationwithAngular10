//required modules for application

//express module
const express = require('express');

//path module for urls
const path = require('path');

// mongoose module form connect mongoDB
const mongoose = require('mongoose');

const cors = require('cors');

//body parser module
const bodyParser = require('body-parser');

const dbConfig = require('./database/db');

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

//get our Web / API routes

const userRoute = require('./routes/userRoutes');

//create express instance
const app = express();

//parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

//setting up the cors
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/frontend')));
app.use('/', express.static(path.join(__dirname, 'dist/frontend')));

//set our Web / API routes
app.use('/user-api', userRoute)

//main code for start server on port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})


// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message); // Log error message in our server's console
//   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
//   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
// });
