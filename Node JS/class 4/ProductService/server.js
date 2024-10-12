const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const productRoutes = require("./routes/productRoutes");
const app = express();
const port = 3000;

app.use(express.json());

// connect to Database
connectDB();

app.use("/shopApi", productRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
