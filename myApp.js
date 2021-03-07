var express = require('express');
var app = express();

console.log("Hello World")

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req, res) => {

    let str = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO WORLD" : "Hello json";

    res.json({ "message": str })
})

app.use("/public", express.static(__dirname + "/public"))

module.exports = app;
