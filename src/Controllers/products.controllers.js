import productsService from "../services/products.services.js"

export const getBienvenido = (req, res) => {
    res.send("Bienvenido !!!");
}

export const getProducts = (req, res) => {
    res.json(productsService.getProductsService());
}

export const getCategorias = (req, res) => {
    res.json(categorias);
}

export const getProductsId = (req, res) => {
    
    const { id } = req.params;
    const producto = productsService.getProductsServiceId(id);
    
    if(!producto) {
        res.status(404).json({error: "El producto no existe"});
    }
    
    res.json(producto);
}