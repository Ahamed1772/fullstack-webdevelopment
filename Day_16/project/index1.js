import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined"));

function logger(req,res,next){
    console.log(req.method);
    console.log(req.url);
    next();
}

app.use(logger);

app.get("/",(req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res) => {
  const dict = { street: req.body.street,pet: req.body.pet};
  console.log(dict);
  res.send(`<h1>Your Band Name is</h1>${dict.street}${dict.pet}<h2></h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
