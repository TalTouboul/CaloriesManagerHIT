/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const express = require("express"); // Importing the Express framework
const CaloriesCollection = require("../models/calories"); // Importing the Calories collection model
const { getUserById } = require("../controllers/users"); // Importing the getUserById function from the users controller

const router = express.Router(); // Creating an instance of an Express router

// Route to generate a report based on user_id, year, and month
router.get("/", async (req, res) => {
  const { user_id, year, month } = req.query; // Extracting user_id, year, and month from query parameters

  try {
    const u_id = await getUserById(user_id); // Getting user details using getUserById function

    const data = await CaloriesCollection.find({ // Querying Calories collection to find records based on user_id, year, and month
      user_id: u_id,
      year,
      month,
    }).lean(); // Using lean() to get plain JavaScript objects instead of Mongoose documents

    // Initializing an object to store formatted data for different categories
    const formattedData = {
      breakfast: [],
      lunch: [],
      dinner: [],
      other: [],
    };

    // Iterating over the data and categorizing each record based on its category
    data.forEach((item) => {
      formattedData[item.category].push({ // Pushing relevant data into respective category arrays
        day: item.day,
        description: item.description,
        amount: item.amount,
      });
    });

    res.json(formattedData); // Sending formatted data as JSON response
  } catch (error) {
    console.error(error); // Logging any errors to the console for debugging purposes
    res.status(500).send(error); // Sending a 500 Internal Server Error status and error message if an error occurs
  }
});

module.exports = router; // Exporting the router object to be used by other parts of the application