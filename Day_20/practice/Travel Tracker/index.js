import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  database: "world",
  port: 5432,
  host: "localhost",
  password: "123456"
});
let country_code = "";
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    const result = await db.query("SELECT country_code FROM visited_countries");
    const valid = [];
    result.rows.forEach(element => {
      valid.push(element.country_code);
    });
    // console.log(result,result.rows);
    res.render("index.ejs",{countries:valid,total:valid.length});
   
});

app.post("/add",async (req,res) => {
    const answer = req.body.country;
    const visitedCountries = await db.query("SELECT country_code FROM countries WHERE country_name = $1",[answer]);
    if (visitedCountries.rows.length !== 0){
        let data = visitedCountries.rows[0];
        let value = data.country_code;
        db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",[value]);
    }
    res.redirect("/");

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
