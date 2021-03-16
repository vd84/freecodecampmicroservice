import { MESSAGE_STYLE } from './config';
import express, { static } from 'express';
var app = express();

let str = MESSAGE_STYLE === "uppercase" ? "HELLO WORLD" : "Hello json";

console.log(process.env.MESSAGE_STYLE)
console.log(process.env.APP_ENV)
console.log(str)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/json", (req, res) => {
    res.json({ "message": str })
})

app.use("/public", static(__dirname + "/public"))

export default app;
