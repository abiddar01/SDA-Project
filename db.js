const mongoose = require("mongoose");

const connectDB = async () => {
  // Use environment variable if set, else fallback to local MongoDB URI
  const connectionString = process.env.MONGO_URI || "mongodb+srv://dar8881212:12345@cluster0.lwd19pm.mongodb.net/";

  try {
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
