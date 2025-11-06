import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenido !!!");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

//clase10
let productos = [
    {id: 1, categoria: "micha"},
    {id: 2, categoria: "gala"},
    {id: 3, categoria: "chiquito"},
];

app.get("/api/productos", (req, res) => {
    res.json(productos);
});
//

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));