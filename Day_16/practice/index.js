
import express from "express";

const app = express();
const port = 3000;


app.get("/",(req,res) => {
    res.send("<h1>Hello world</h1>");
});

// app.get("/about",(req,res) => {
//     res.send("<h1>About Page</h1>");
// });

// app.get("/contact",(req,res) => {
//     res.send("<h1>Contact Page</h1>");
// });

app.post("/user/angela",(req,res) => {
    res.sendStatus(200);
});

app.put("/user/angela",(req,res) => {
    res.sendStatus(200);
});

app.patch("/user/angela",(req,res) => {
    res.sendStatus(200);
});

app.delete("/user/angela",(req,res) => {
    res.sendStatus(200);
});

app.listen(port,() => {
    console.log(`website is successfully running on port ${port}`);
});

