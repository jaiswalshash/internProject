require("dotenv").config();

const productData = require("./data/products");
const Product = require("./models/productModel");
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("Data import SUCCESS");
        process.exit();
    } catch (error) {
        console.log("Data import FAILED");
        process.exit(1);
    }
};

importData();
