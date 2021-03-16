var express = require('express');
var app = express();
require('dotenv').config()


let str = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO WORLD" : "Hello json";

console.log(process.env.MESSAGE_STYLE)
console.log(process.env.APP_ENV)
console.log(process.env)


console.log("Hello World")

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req, res) => {


    res.json({ "message": str })
})

app.use("/public", express.static(__dirname + "/public"))

module.exports = app;
