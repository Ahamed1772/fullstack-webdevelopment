// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/",async(req,res) => {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    try {
        const data = response.data;
        res.render("index.ejs",{
        user: data.username,
        secret: data.secret
    });
    } catch (error) {
        res.render("index.ejs",{
            error: error.data
        });
    }
    
});


// 6. Listen on your predefined port and start the server.
app.listen(port,() => {
    console.log(`app is successfully running on port ${port}`);
});