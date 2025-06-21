import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import env from "dotenv";
import googleStrategy from "passport-google-oauth2";


const app = express();
const port = 3000;
const saltRounds = 2;
env.config();

//database initiate
const db = new pg.Client({
    "database": process.env.PG_DATABASE,
    "host":  process.env.PG_HOST,
    "password": process.env.PG_PASSWORD ,
    "user":  process.env.PG_USER,
    "port":  process.env.PG_PORT
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
}));

app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", async (req, res) => {
  console.log(req.user);

  ////////////////UPDATED GET SECRETS ROUTE/////////////////
  if (req.isAuthenticated()) {
    try {
      const result = await db.query(
        `SELECT secret FROM users WHERE email = $1`,
        [req.user.email]
      );
      console.log(result);
      const secret = result.rows[0].secret;
      if (secret) {
        res.render("secrets.ejs", { secret: secret });
      } else {
        res.render("secrets.ejs", { secret: "Jack Bauer is my hero." });
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect("/login");
  }
});

app.get("/submit", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("submit.ejs");
  } else {
    res.redirect("/login");
  }
});

app.post("/submit", async function (req, res) {
  const submittedSecret = req.body.secret;
  console.log(req.user);
  try {
    await db.query(`UPDATE users SET secret = $1 WHERE email = $2`, [
      submittedSecret,
      req.user.email,
    ]);
    res.redirect("/secrets");
  } catch (err) {
    console.log(err);
  }
});

app.get("/auth/google/secrets",passport.authenticate("google",{
    successRedirect: "/secrets",
    failureRedirect: "/login"
}));

app.get("/logout", (req,res) => {
    req.logout( (error) => {
      if(error){console.log(error)}
      res.redirect("/")
    })
})

app.post("/register", async (req, res) => {
    const email = req.body.username;
    const password = req.body.password;
    try {
      const check = await db.query("SELECT * FROM users WHERE email = $1",[email]);
      if (check.rows.length > 0){
        res.send("email already exist");
      }else{
        bcrypt.hash(password,saltRounds, async(error,hash) => {
          if(error){
            console.log(error);
          }else{
            const result = await db.query(
              "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
              [email,hash]
            );
            const user = result.rows[0];
            req.login(user, (error) => {
              console.log(error);
              res.redirect("/secrets");
            })
          }
        })
      }
    } catch (error) {
      console.log(error);
    }
});

app.get("/auth/google",passport.authenticate("google",{
    scope: ["profile","email"],
}));

app.post("/login",passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login"
}));

passport.use("local",new Strategy (async function verify(username,password,cb) {
    console.log(username,password);
    try {
      const database = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [username]
      );
      if (database.rows.length > 0) {
        const user = database.rows[0];
        const storedPassword = user.password;
        bcrypt.compare(password,storedPassword, (error,result) => {
          if(result){
            return cb(null,user);
          }else{
            return cb(null,false);
          }
        })
      } else {
        return cb("User not found");
      }
    } catch (error) {
      return cb (error);
    }
}))

passport.use("google", new googleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
},async (accessToken, refreshToken, Profile, cb) => {
    console.log(Profile);
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1",[Profile.email]);
      if (result.rows.length === 0) {
        const newUser = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)",[Profile.email,"google"]);
        cb(null,newUser.rows[0]);
      } else {
        cb(null,result.rows[0]);
      }
    } catch (error) {
      cb(error)
    }
}));

passport.serializeUser((user,cb) => {
    cb(null,user);
});

passport.deserializeUser((user,cb) => {
    cb(null,user);
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
