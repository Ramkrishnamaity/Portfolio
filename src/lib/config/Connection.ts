import mongoose from "mongoose";

export default async function dbConnect() {
    const mongoURL = process.env.DB_URL ?? "mongodb://localhost:27017/";
    try {
        // mongodb connection
        await mongoose.connect(mongoURL);
        console.log("MongoDB connected.");

    } catch (error) {
        console.error("Connection error:", error);
        process.exit(1);
    }
}
