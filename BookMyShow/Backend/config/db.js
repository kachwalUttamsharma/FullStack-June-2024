const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Db Connected");
  } catch (error) {
    console.log("Monogo db connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
