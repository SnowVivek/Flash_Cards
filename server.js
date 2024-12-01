const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON body
app.use(express.json());

// Dummy credentials for validation
const validUser = { username: "admin", password: "1234" };

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the credentials match
  if (username === validUser.username && password === validUser.password) {
    res.status(200).json({ message: "Autobots Rollout" });
  } else {
    res.status(401).json({ message: "Invalid credentials." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
