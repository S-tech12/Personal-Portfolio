const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Public/Animation.html");
});

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "experiment",
});

con.connect((err) => {
    if (err) {
        console.log("THERE IS AN ERROR TO CONNECT THE DATABASE!! " + err);
    } else {
        console.log("THE CONNECTION HAS BEEN CREATED!!");
    }
});

app.post("/submit", (req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const usermessage = req.body.usermessage;

    const query = `INSERT INTO users(name,email,Message) VALUES ('${username}','${useremail}','${usermessage}')`;

    con.query(query, (err) => {
        if (err) {
            console.log("THERE IS AN ERROR TO ENTER THE DATA!! " + err);
            res.status(500).send("Error inserting data into database.");
        } else {
            console.log("THE MESSAGE HAS BEEN SENT!!");
            res.status(200).send("Message successfully sent.");
        }
    });
});

module.exports = app;
