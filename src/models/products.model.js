import fs from 'fs/promises'
import path from 'path'

const __dirname = import.meta.dirname;

export const getAllProducts = async () => {
   try {
        const data = await fs.readFile(
        path.join(__dirname, "products.json"),
        "utf-8"
        );

        const productos = JSON.parse(data);
        return productos;
    }
    catch (error) {
        console.error(error);
    }
};

export const getProductById = async (id) => {
    try {
        const data = await fs.readFile(
        path.join(__dirname, "products.json"),
        "utf-8"
        );

        const productos = JSON.parse(data);
        const producto = productos.find(item => item.id == id)
        return producto;
    }
    catch (error) {
        console.error(error);
    }
};