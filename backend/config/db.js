const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose.createConnection(process.env.MONGO_URI, () =>
    console.log("Database Connected")
  );
};

module.exports = connectDB;
