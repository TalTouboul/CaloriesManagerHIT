/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const mongoose = require("mongoose");// Importing the Mongoose library

// Defining a Mongoose schema for the 'users' collection with the next parameters:
// ID, First name, Last name, and Birthday
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
});

// Creating a Mongoose model named 'User' based on 'userSchema'
const User = mongoose.model("users", userSchema);

module.exports = User;