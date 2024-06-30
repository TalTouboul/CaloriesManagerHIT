/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/

// Importing the 'promises' version of the 'fs' module
const fs = require("fs").promises;

// Async function to read the contents of developers.json file
const readDevelopersFile = async () => {
  const filePath = "developers.json";
  try {
    // Reading the file asynchronously and storing its content in 'data'
    const data = await fs.readFile(filePath, "utf8");
    // Parsing the JSON data and returning it as a JavaScript object
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading developers.json:", err); // Logging an error message if reading the file fails
    throw new Error("Error reading developers.json"); // Throwing an error indicating failure to read the file
  }
};

// Exporting the readDevelopersFile function for use in other parts of the application
module.exports = { readDevelopersFile };
