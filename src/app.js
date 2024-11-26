const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // adds security headers
const authRoutes = require("./routes/auth"); // authentication route handler

const app = express(); // creates an express application

// Middleware
app.use(helmet()); // Adds various HTTP headers to secure your app
app.use(cors());
app.use(express.json()); // parses incoming JSON requests

// Routes
app.use("/api/auth", authRoutes); // This line tells Express to use your auth routes for any URL starting with "/api/auth"

module.exports = app;
