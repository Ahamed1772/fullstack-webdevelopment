import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const port  = 3000;
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended:true }));

// app.get("/",(req,res) => {
//     const date = new Date();
//     const day = date.getDay();
//     let type = "weekday";
//     let advice = "it's time to work hard"
//     if (day == 0 || day == 6){
//         type = "weekend";
//         advice = "it's time to relax";
//     }
//     res.render("index.ejs",{
//         type: type,
//         advice: advice
//     });
// });

// app.get("/",(req,res) => {
//     const data = {
//         title: "EJS TAGS CHECK",
//         seconds: new Date().getSeconds(),
//         items: ["apple","orange","mango"],
//         content: "<em>This is the end</em>"
//     };
//     const title = "hi"
//     res.render("index.ejs",{data:data});
// })
let total = 0;
app.get("/",(req,res) => {
    res.render("index.ejs",{total:total});
});

app.post("/valid",(req,res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    total = fname.length + lname.length;
    res.render("index.ejs",{total:total});
});

app.listen(port,() => {
    console.log(`app is successfully running on port ${port}`);
});