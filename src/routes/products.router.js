import { Router } from "express";
import { getBienvenido, getProducts, getProductById, CreateProduct, deleteProduct } from "../Controllers/products.controllers.js";
import { auth } from "../middlewares/auth.middleware.js"
const router = Router();

router.get("/", getBienvenido);
router.get("/api/productos", getProducts);
router.get("/api/productos/:id", getProductById);
router.post("/api/productos", auth ,CreateProduct);
router.delete("/api/productos/:id", auth, deleteProduct);



export default router;