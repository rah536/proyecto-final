import { Router } from "express";
import { getBienvenido, getProducts, getCategorias, getProductsId } from "../Controllers/products.controllers.js";
const router = Router();

router.get("/", getBienvenido);

router.get("/api/productos", getProducts);

router.get("/api/categorias", getCategorias);

router.get("/api/productos/:id", getProductsId);

router.use((req, res) => {
    res.status(404).json({error: "Recurso no encontrado o ruta inválida"});
})

export default router;