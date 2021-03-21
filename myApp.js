var express = require('express');
var app = express();
var bodyParser = require('body-parser')

let str = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO WORLD" : "Hello json";

console.log(process.env.MESSAGE_STYLE)
console.log(process.env.APP_ENV)
console.log(str)

app.use((req, res, next) => {
    // Do something
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.route("/name").get((req, res) => {

    res.json({ "name": req.query.first + " " + req.query.last })
}).post(() => {

})

app.get("/json", (req, res) => {
    res.json({ "message": str })
})

app.get("/:word/echo", (req, res) => {
    res.json({ "echo": req.params.word })
})

app.get('/now', (req, res, next) => {
    req.time = new Date
    next()
}, (req, res) => {
    res.json({ "time": req.time })
})

app.use("/public", express.static(__dirname + "/public"))




module.exports = app;
