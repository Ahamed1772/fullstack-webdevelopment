import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result =  response.data;
    res.render("index.ejs",{data:result})
  } catch (error) {
    console.log("error has happened",error.message);
    res.render("index.ejs",{data: error.message});
  }

});

app.post("/", async (req, res) => {
  try {
    const selection = req.body.type;
    const participants = req.body.participants;
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${selection}&participants=${participants}`);
    const result = response.data;
    res.render("index.ejs",{
      selection:selection,
      participants:participants,
      result:result[Math.floor(Math.random() * result.length)]
    });
  } catch (error) {
    res.render("index.ejs",{
      error: error.message
    });
  }
  
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
