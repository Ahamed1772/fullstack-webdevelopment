import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express();
const port = 3000;

const db = new pg.Client({
    "database": "world",
    "host": "localhost",
    "user": "postgres",
    "password": "123456",
    "port": 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", async(req, res) => {
    const result = await db.query("SELECT * FROM items");
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: result.rows
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items(title) VALUES($1)",[item]);
    console.log("successfully inserted data into database");
  } catch (error) {
    console.log(error)
  }

  res.redirect("/");
});

app.post("/edit", async(req, res) => {
    const value = req.body.updatedItemTitle;
    const id = req.body.updatedItemId;
    try {
      await db.query("UPDATE items SET title = $1 WHERE id = $2",[value,id]);
      console.log("successfully updated data");
    } catch (error) {
      console.log(error)
    }
    res.redirect("/");
});

app.post("/delete", async(req, res) => {
    const value = req.body.deleteItemId;
    try {
      await db.query("DELETE FROM items WHERE id = $1",[value]);
      console.log("successfully deleted data");
    } catch (error) {
      console.log(error);
    }
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
