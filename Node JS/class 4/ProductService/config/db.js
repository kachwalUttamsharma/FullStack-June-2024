const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kachwalsharma1:ff3wY5oq14KpudAM@cluster0.mki9h.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Mongo Db Connected");
  } catch (error) {
    console.log("Monogo db connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
