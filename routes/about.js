/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const router = express.Router(); // Creating an instance of an Express router

// Route to return all data regarding the developers of this project
router.get("/", async (req, res) => {
  // Calling the function to read the developers file
  const developersData = await readDevelopersFile();
  
  // If no data is found, send a 404 status code with an error message
  if (!developersData) {
    return res.status(404).json({ error: "Error getting developers data." });
  }

  // If data is found, send a 200 status code with the developers data
  return res.status(200).json(developersData);
});

module.exports = router; // Exporting the router object to be used by other parts of the application
