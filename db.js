const mongoose = require("mongoose");

const connectDB = async () => {

  const connectionString = process.env.MONGO_URI;
  
 try {
    await mongoose.connect(connectionString);
    useNewUrlParser: true,
 
    
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;