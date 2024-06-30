/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/

// Importing the Express framework
const express = require("express");

// Importing the getUserById function from the users controller
const { getUserById } = require("../controllers/users"); 

const router = express.Router(); // Creating an instance of an Express router

// Route to handle GET requests for fetching a user by their ID
router.get("/:id", async (req, res) => {
  const { id } = req.params; // Extracting the user ID from the request parameters

  try {
    const numericId = parseInt(id, 10); // Converting the user ID from string to a base-10 integer

    // Checking if the converted numeric ID is NaN (Not a Number) and responding with a 400 Bad Request status
    if (isNaN(numericId)) { 
      return res.status(400).json({ error: "Invalid user ID." }); 
    }
    // Calling the getUserById function to find the user by their numeric ID
    const findUser = await getUserById(numericId);

    // Checking if no user was found and Responding with a 404 Not Found status
    if (!findUser) { 
      return res.status(404).json({ error: "User id not found." }); 
    }
    // Responding with a 200 OK status and sending the found user information as JSON
    res.status(200).json(findUser); 
    // Catching any errors that occur during the try block
  } catch (error) { 
    console.error(error); 
    res.status(500).send(error); 
  }
});

module.exports = router; // Exporting the router object to be used by other parts of the application
