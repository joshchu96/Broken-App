const express = require("express");
const axios = require("axios");
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

app.post("/", async (req, res, next) => {
  try {
    // Extract the list of GitHub usernames from the request body before running in the axios function
    const githubUsernames = req.body.developers;

    // Fetch data for each username at the same time
    const userRequests = githubUsernames.map((username) =>
      axios.get(`https://api.github.com/users/${username}`)
    );

    // Wait for all the requests to complete
    const userResponses = await Promise.all(userRequests);

    // Map the responses to extract the name and bio
    const userData = userResponses.map((response) => ({
      name: response.data.name,
      bio: response.data.bio,
    }));

    // Send the formatted data as a JSON response
    res.json(userData);
  } catch (error) {
    // Pass errors to the next middleware (error handler)
    next(error);
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
