import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
dotenv.config();
// import { createDoc } from "./models/MovieSchema.js";
// createDoc();

// import { InsertManyDoc } from "./models/MovieSchema.js";
// InsertManyDoc();

// import { ReadAllDoc } from "./models/MovieSchema.js";
// ReadAllDoc();

// import { ReadSingleDoc } from "./models/MovieSchema.js";
// ReadSingleDoc();

// import { UpdateDoc } from "./models/MovieSchema.js";
// UpdateDoc("68648c69b2a99e10bdefe623");

// import { DeleteDoc } from "./models/MovieSchema.js";
// DeleteDoc();

const DATABASE_URL = process.env.DATABASE_URL;
//Database initialization
connectDB(DATABASE_URL);

const app = express();
const PORT = process.env.PORT;


app.listen(PORT,() => {
    console.log(`Application successfully running on port ${PORT}`);
});
