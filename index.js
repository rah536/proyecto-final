import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js"
import authRouter from "./src/routes/auth.router.js"
import { auth } from "./src/middlewares/auth.middleware.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", authRouter);
app.use(productsRouter);

app.use((req, res) => {
    res.status(404).json({error: "Recurso no encontrado o ruta inválida"});
})

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));