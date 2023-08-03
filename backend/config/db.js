const mongoose = require("mongoose");

// Connect to the MongoDB database
const connectionToMongo = () => {
  
  mongoose
    .connect("mongodb://127.0.0.1:27017/reviews", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Failed to connect to MongoDB", error);
    });
};

module.exports = connectionToMongo;
