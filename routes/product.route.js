import express from "express";
import Product from "../models/product.model.js";
import {
    createProduct,
    deleteProduct,
    getProducts,
    getSingleProduct,
    updateProduct
} from "../controllers/product.controller.js";

const router = express.Router();

//**** THIS WILL SHOW YOU ALL THE PRODUCTS ***********  
router.get("/", getProducts);

//**** THIS WILL SHOW A SINGLE PRODUCT ****************
router.get("/:id", getSingleProduct);

//**** THIS WILL CREATE A PRODUCT ****************
router.post("/", createProduct);

//**** THIS WILL UPDATE A PRODUCT ****************
router.put("/:id", updateProduct);

//****** THIS WILL DELETE A PRODUCT ****************
router.delete("/:id", deleteProduct);

export default router;

//*↓↓↓↓↓↓↓↓↓↓↓↓↓↓ THIS WHOLE THING IS CALLED A CONTROLLER FUNCTION ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// router.get("/", async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });
//*↑↑↑↑↑↑↑↑↑↑↑ THIS WHOLE THING IS CALLED A CONTROLLER FUNCTION ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ 

