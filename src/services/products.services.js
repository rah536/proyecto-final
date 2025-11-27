const productos = [
    {id: 1, nombre: "micha", pelo: "largo y duro"},
    {id: 2, nombre: "gala", pelo: "cresposo"},
    {id: 3, nombre: "chiquito", pelo: "duro"},
    {id: 4, nombre: "afri", pelo: "suave"},
]; 

import { getAllProducts, getProductById } from "../models/products.model.js";

const getProductsService = async () => {
    const productos = await getAllProducts();
    return productos;
};

const getProductsServiceId = async (id) => {
    const producto = await getProductById(id);
    return producto;
}
const categorias = [
    {id: 2340, categoria: "MICHA"},
    {id: 1120, categoria: "GALA"},
    {id: 3345, categoria: "CHIQUIRO"},
    {id: 6128, categoria: "AFRI"},
];

const getCategoriasService = () => categorias;


export default {getProductsService, getCategoriasService, getProductsServiceId};