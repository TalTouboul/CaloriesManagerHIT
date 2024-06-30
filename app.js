
/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/

const createError = require('http-errors'); // Module to create HTTP errors
const mongoose = require('mongoose'); // Mongoose for MongoDB connection and operations
mongoose.Promise = global.Promise; // Setting mongoose to use global promises
const express = require('express'); // Express framework for building the web server
const path = require('path'); // Path module to handle and transform file paths
const cookieParser = require('cookie-parser'); // Middleware to parse cookies
const logger = require('morgan'); // HTTP request logger middleware
const fs = require('fs'); // File system module to handle file operations
process.env.MONGODB_URI = "mongodb+srv://tal:tubul1497@caloriesdb.jpv63m1.mongodb.net/?retryWrites=true&w=majority&appName=caloriesDB";
const uri = process.env.MONGODB_URI;
// Importing route handlers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addcaloriesRouter = require('./routes/addcalories');
const reportRouter = require('./routes/report');
const aboutRouter = require('./routes/about');

// Initializing Express app
const app = express();

// MongoDB connection using mongoose
mongoose.connect(uri)
    .then(async () => {
      console.log("Connected To DB Successfully....");
    })
    .catch((err) => {
      console.log(err)
    });

// Setting the view engine to Pug and specifying the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware setup
app.use(logger('dev')); // Logging HTTP requests
app.use(express.json()); // Parsing JSON bodies of requests
app.use(express.urlencoded({ extended: false })); // Parsing URL-encoded bodies
app.use(cookieParser()); // Parsing cookies
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files from the public directory

// Routing setup
app.use('/', indexRouter); // Route for the home page
app.use('/users', usersRouter); // Route for user-related operations
app.use('/addcalories', addcaloriesRouter); // Route for adding calories
app.use('/report', reportRouter); // Route for generating reports
app.use('/about', aboutRouter); // Route for the about page

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // Exporting the app module