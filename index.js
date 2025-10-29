import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Express");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));