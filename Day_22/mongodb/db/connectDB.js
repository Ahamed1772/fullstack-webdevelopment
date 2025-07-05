import mongoose from "mongoose";


export const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected Successfully.....");
    } catch (error) {
        console.log(error);
    }
}