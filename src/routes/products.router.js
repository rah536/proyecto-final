import { Router } from "express";
import { getBienvenido, getProducts, getProductById, CreateProduct, deleteProduct } from "../Controllers/products.controllers.js";
const router = Router();

router.get("/", getBienvenido);
router.get("/api/productos", getProducts);
router.get("/api/productos/:id", getProductById);
router.post("/api/productos", CreateProduct);
router.delete("/api/productos/:id", deleteProduct);

router.use((req, res) => {
    res.status(404).json({error: "Recurso no encontrado o ruta inválida"});
})

export default router;