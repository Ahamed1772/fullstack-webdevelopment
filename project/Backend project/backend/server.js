import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import productRoute from "./routes/productRouter.js"; //import routes
import database from "./config/db.js"; //import database
import { aj } from "./lib/arcjet.js"; //import arcjet

dotenv.config();
const app = express();
const PORT = process.env.PORT;




app.use(helmet());//helmet is a middleware that helps you protect your app by setting various http headers
app.use(morgan());//log the requests
app.use(cors());
app.use(express.json());
app.use("/api/products",productRoute); //use router

//apply arcjet rate-limit to all routes
app.use(async (req,res,next)=> {
    try {
         const decision = await aj.protect(req, { requested: 1 }); // Deduct 1 tokens from the bucket
         console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      res.status(429).json({ error: "Too Many Requests"});
    } else if (decision.reason.isBot()) {
        res.status(403).json({ error: "No bots allowed"});
    } else {
        res.status(403).json({ error: "Forbidden"});
    }
    return
  }

    //check for spoofed bots
    if(decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())){
        res.status(403).json({ error: "Spoofed bot detected"});
        return;
    }

    next()
    } catch (error) {
        console.log(`This is error from server.js arcjet portion :: ${error}`);
        next(error);
    }
})


//create table
async function initDB(){
    try {
        const response = await database.query('CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, price DECIMAL(10, 2) NOT NULL, create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
        console.log("DATABASE INITIALIZED SUCCESSFULLY");
    } catch (error) {
        console.log(`This is the error: ${error.message}`)
    }
}

initDB().then(() => {
    app.listen(PORT,() => {
        console.log(`Application successfully running on port ${PORT}`)
    })
})


