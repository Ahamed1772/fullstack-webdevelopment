// cmd --> node file.js

// const fs = require("fs");

// fs.writeFile("message.txt","Hello world",(error) => {
//     if (error) throw error;
//     console.log("successfully created a file");
// });

// fs.readFile("message.txt","utf8",(error,data) => {
//     if (error) throw error;
//     console.log(data);
// });


/////////////////////////////////////////////////////////////////////////
// cmd --> npm init       (to initialize npm)

// var generateName = require("sillyname");

// import generateName from "sillyname";
// var sillyName = generateName();
// console.log(`Random name is ${sillyName}`);


////////////////////////////////////////////////////////////////////////
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";

inquirer
  .prompt([
    {
        message: "Type in your url",
        name: "URL",  
    },
  ])
  .then((answers) => {
    const answer = answers.URL;
    var qr_svg = qr.image(answer);
    qr_svg.pipe(fs.createWriteStream('qr_imag.png'));

    //storing the url in a file
    fs.writeFile("URL.txt",answer,(error) => {
        if (error) throw error;
        console.log("url file successfully created")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });