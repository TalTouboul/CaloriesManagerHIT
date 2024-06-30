/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
var express = require('express'); // Importing the Express framework
var router = express.Router(); // Creating an instance of an Express router

/* GET home page. */
router.get('/', async function(req, res, next) { 
  res.render('index', { title: 'Calories Manager' }); // Rendering the 'index' view with a title 'Calories Manager'
});

module.exports = router; // Exporting the router object to be used by other parts of the application
