const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, () => console.log("Servidor corriendo"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/register.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/"));
});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});
