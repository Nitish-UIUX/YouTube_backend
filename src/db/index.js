import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//-------------------------------------------connect to database using async and await-------------------------------------
const connectDB = async () => {
    try {
        // Log the connection attempt
        console.log("Connecting to MongoDB database...");

        // Ensure MONGODB_URI includes the database name
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: DB_NAME, // Set the database name here
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Access the correct property to log the host
        console.log(`\nConnected to MongoDB database: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB database:", error.message);
        process.exit(1);
    }
};

export default connectDB;
