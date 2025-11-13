import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.send("Bienvenido !!!");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

//clase10
let productos = [
    {id: 1, nombre: "micha", pelo: "largo"},
    {id: 2, nombre: "gala", pelo: "crespo"},
    {id: 3, nombre: "chiquito", pelo: "duro"},
    {id: 4, nombre: "afri", pelo: "suave"},
];

app.get("/api/productos", (req, res) => {

    const { pelo } = req.query;
    if (pelo) {
        const productosFiltrados = productos.filter((item) => item.pelo == pelo);
        res.json(productosFiltrados);
        if(!productosFiltrados) {
            res.status(404).json({error: "El producto no existe"});
        }
        return;
    }
    
    res.json(productos);
});
//

//clase11
let nombres = [
    {id: 2340, categoria: "MICHA"},
    {id: 1120, categoria: "GALA"},
    {id: 3345, categoria: "CHIQUIRO"},
    {id: 6128, categoria: "AFRI"},
];
app.get("/api/categorias", (req, res) => {
    res.json(categorias);
});

app.get("/api/productos/:id", (req, res) => {
    
    const { id } = req.params;
    const producto = productos.find((item) => item.id == id);
    
    if(!producto) {
        res.status(404).json({error: "El producto no existe"});
    }
    
    res.json(producto);
});



app.use((req, res) => {
    res.status(404).json({error: "Recurso no encontrado o ruta inválida"});
})




const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));