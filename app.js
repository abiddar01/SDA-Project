const express = require("express");
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const adminRoutes = require("./routes/admin");
const connectdb = require("./db");

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use('/public', express.static('uploads')); // For static assets like images

// Routes
app.use(adminRoutes);

const PORT = 1732;

async function startServer() {
  try {
    await connectdb(); // Connect to MongoDB
    console.log("Database connected successfully!");

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
  }
}

require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

startServer();
