// Import required modules
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Adjust the path if necessary
import express from "express"; // Assuming you're using Express

// Load environment variables from the .env file
dotenv.config({ path: "./env" });

// Create an Express application
const app = express();

// Call the connectDB function and listen for the server then promise resolves
connectDB()
  .then(() => {
    // Start the server only if the DB connection is successful
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB database:", error);
    process.exit(1); // Exit the process with failure
  });
