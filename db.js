const mongoose = require("mongoose");

const connectDB = async () => {
  const connectionString = "mongodb+srv://dar8881212:12345@cluster0.lwd19pm.mongodb.net/";

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
