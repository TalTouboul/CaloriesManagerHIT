/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require('express'); // Importing the Express framework
const router = express.Router(); // Creating an instance of an Express router
const Calories = require('../models/calories'); // Importing the Calories model
const { addNewCalorieRecord } = require('../controllers/calories'); // Importing the addNewCalorieRecord function from the calories controller

// Fetch all calorie records
router.get('/', async function(req, res, next) {
    try {
        const addcalories = await Calories.find({}); // Finding all calorie records from the database
        res.send(addcalories); // Sending the fetched calorie records as a response
    } catch (error) {
        next(error); // Passing the error to the error handling middleware
    }
}); 

// Create a new calorie record
router.post("/", async (req, res) => {
    try {
        const calories = await addNewCalorieRecord(req.body); // Calling the function to add a new calorie record
        res.send(calories); // Sending the newly created calorie record as a response
    } catch (error) {
        console.error(error); // Logging the error to the console
        res.status(500).send(error); // Sending a 500 status code and the error message as a response
    }
});

module.exports = router; // Exporting the router object to be used by other parts of the application
