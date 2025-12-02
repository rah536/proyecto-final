import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(productsRouter);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));