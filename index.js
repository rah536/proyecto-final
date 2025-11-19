import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js"

const app = express();
app.use(cors());
app.use(productsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));