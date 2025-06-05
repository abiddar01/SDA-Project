const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const adminRoutes = require("./routes/admin");
const connectdb = require("./db");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Static assets
app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "uploads")));

// View engine
app.set("view engine", "ejs");

// Routes
app.use("/admin", adminRoutes);

// Dynamic port from environment or fallback
const PORT = process.env.PORT || 2980;

async function startServer() {
  try {
    await connectdb(); // Connect to MongoDB
    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
  }
}

startServer();
