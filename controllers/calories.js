/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const CaloriesCollection = require("../models/calories"); // Importing the CaloriesCollection model
const { getUserById } = require("../controllers/users"); // Importing the getUserById function from the users controller

// Async function to add a new calorie record
const addNewCalorieRecord = async ({
  user_id,
  year,
  month,
  day,
  description,
  category,
  amount,
}) => {
  // Generating a unique id based on the current timestamp
  const id = Date.now();
  // Getting the user object by their 'user_id'
  const u_id = await getUserById(user_id);
   // Creating a new instance of CaloriesCollection with provided data
  const calories = new CaloriesCollection({
    id,
    user_id: u_id._id,
    year,
    month,
    day,
    description,
    category,
    amount,
  });
  
  // Saving the new calorie record to the database and returning it.
  await calories.save();
  return calories;
};

//Exporting the addNewCalorieRecord function for use in other parts of the application
module.exports = { addNewCalorieRecord };