import productsService from "../services/products.services.js"

export const getBienvenido = (req, res) => {
    res.send("Bienvenido !!!");
}

export const getProducts = async(req, res) => {
    res.json(await productsService.getProductsService());
}

export const getCategorias = (req, res) => {
    res.json(categorias);
}

export const getProductsId = async (req, res) => {
    
    const { id } = req.params;
    const producto = await productsService.getProductsServiceId(id);
    
    if(!producto) {
        res.status(404).json({error: "El producto no existe"});
    }
    
    res.json(producto);
}