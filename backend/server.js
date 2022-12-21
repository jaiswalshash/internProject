const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const app = express();
const router = require("./routes/productRoutes.js");
require("dotenv").config();

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api", router);

mongoose.createConnection(
  process.env.MONGO_URL,
  {
    // useNewUrlParser: true,
    // useUnifiedTopology:true,
  },
  () => console.log("Account Database Connected")
);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
