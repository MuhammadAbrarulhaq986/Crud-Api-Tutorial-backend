import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productsRoute from "./routes/product.route.js";
const app = express();


//*********** MIDDLEWARE ******************  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//*********** ROUTES ******************  
app.use("/api/products", productsRoute);


app.get("/", (req, res) => {
    res.send("Hello From Node API Server Updated ")
});


//**** MONOGODB CONNECTION ******************  
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully! 🚀');
        app.listen(3000, () => {
            console.log("Server is running on port 3000");

        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Error: ", error);
    });
// console.log('MONGO_URI:', process.env.MONGO_URI);



//******** THIS WILL SHOW YOU ALL THE PRODUCTS ***********
// app.get("/api/products", async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

//*************** THIS WILL SHOW A SINGLE PRODUCT ****************
// app.get("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

//**************** THIS WILL ADD A NEW PRODUCT ****************
// app.post("/api/products", async (req, res) => {
//     // console.log(req.body);
//     // res.send(req.body);
//     // res.send("Data Received");
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// });

//***************** THIS WILL UPDATE A PRODUCT ****************
// app.put("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             //* .json({ message: "Product not found" }); THIS CAN ALSO WORKS
//             return res.status(404).json({ message: `cannot find any product with ID ${id}` });
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

//********** THIS WILL DELETE A PRODUCT ****************
// app.delete("/api/products/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findOneAndDelete(id);

//         if (!product) {
//             //* return res.status(404).json({ message: `cannot find any product with ID ${id}` });
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json({ message: "Product deleted successfully" });

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


