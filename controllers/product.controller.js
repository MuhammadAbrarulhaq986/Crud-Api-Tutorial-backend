import Product from "../models/product.model.js";


//**** THIS WILL SHOW YOU ALL THE PRODUCTS ***********  
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//***** THIS WILL SHOW A SINGLE PRODUCT ****************
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//***** THIS WILL CREATE A PRODUCT ****************
const createProduct = async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    // res.send("Data Received");
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//******* THIS WILL UPDATE A PRODUCT ****************
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            //* .json({ message: "Product not found" }); THIS CAN ALSO WORKS 
            return res.status(404).json({ message: `cannot find any product with ID ${id}` });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//**** THIS WILL DELETE A PRODUCT ****************
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndDelete(id);

        if (!product) {
            //* return res.status(404).json({ message: `cannot find any product with ID ${id}` });
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };
