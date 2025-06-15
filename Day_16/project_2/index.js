
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended:true }));
app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res) => {
    const password = req.body.password;
    const mypassword = "Javascript";
    if (password === mypassword) {
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port,() => {
    console.log(`app is successfully running on port ${port}`);
});