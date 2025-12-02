import productsModel from "../models/products.model.js";

export const getBienvenido = (req, res) => {
    res.send("Bienvenido !!!");
}

export const getProducts = async(req, res) => {
    res.json(await productsModel.getAllProducts());
};

export const getProductById = async(req, res) => {
    const { id } = req.params;
    res.json(await productsModel.getProductById(id));
};

export const CreateProduct = async (req, res) => {
    if (typeof req.body.name == undefined) {
        return res.status(422).json({ error: "el nombres es obligatorio" });
    }

    const { name, price, categories } = req.body;
    const product = await productsModel.createProduct({ name, price, categories });

    res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const deleted = await productsModel.deleteProduct(id);

    if(!deleted){
        return res.status(404).json({ error: "Not Found" })
    }

    res.json({ message: "Product deleted" });
};