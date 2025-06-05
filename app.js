const express = require("express");
<<<<<<< HEAD
=======
const mongoose = require("mongoose");
>>>>>>> main
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const adminRoutes = require("./routes/admin");
const connectdb = require("./db");
<<<<<<< HEAD
const path = require("path");
require("dotenv").config();
=======
>>>>>>> main

const app = express();

// Middleware
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Static assets
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "uploads")));

// View engine
app.set("view engine", "ejs");

// Routes
app.use(adminRoutes);

// Dynamic port for Vercel / local
const PORT = process.env.PORT || 2990;

// Start server
async function startServer() {
  try {
    await connectdb(); // Connect to MongoDB
    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
=======
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static('uploads'));


// Routes
app.use("/admin", adminRoutes);

const PORT = 1732;

async function startServer() {
  try {
    await connectdb(); // Establish database connection
    console.log("Database connected successfully!");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
>>>>>>> main
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
  }
}

startServer();
