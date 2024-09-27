//require("dotenv").config({path: "./env"});// this is to load the environment variables from the .env file
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./env"}
);

 // call the connectDB function
connectDB();









/*

// -----------------------------------------------------first approach use eff and async and await ------------------------------------

import express from "express";
const app = express();

// Connect to MongoDB database using mongoose library 
(async () => {
    try {
      await  mongoose.connect(`${process.env.
        MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("Error connecting to MongoDB database");
            throw error;
        });

        app.listen(3000, (process.env.PORT), () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("Error connecting to MongoDB database", error);
        throw error;
    }
} )(); 
 */