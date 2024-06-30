/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const UsersCollection = require("../models/users");// Importing the UsersCollection model

// Async function to find a user by their 'id'
const getUserById = async (id) => {
  // Querying the UsersCollection for a document with matching 'id'
  const findUser = await UsersCollection.findOne({ id });

  if (!findUser) {
    throw new Error('User not found'); 
  }
  // Convert the Mongoose document to a plain JavaScript object and return it
  return findUser.toObject();
};

// Exporting the getUserById function for use in other parts of the application
module.exports = { getUserById };


