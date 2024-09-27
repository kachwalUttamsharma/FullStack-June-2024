const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://kachwalsharma1:ff3wY5oq14KpudAM@cluster0.mki9h.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database is connected successfully"))
  .catch((err) => console.log("Database connection error ", err));

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_price: { type: String, required: true },
    isInStock: { type: Boolean, required: true },
    category: { type: String, required: true },
    product_description: { type: String, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

app.use(express.json());

const errorHandler = (err, req, res, next) => {
  res.status(res.statusCode || 404).json({
    message: err.message,
  });
};

app.get("/", (req, res) => {
  res.send("<h1>Welcome to shop</h1>");
});

app.get("/shopApi/getAllProducts", async (req, res, next) => {
  try {
    const allProducts = await productModel.find();
    const html = `
        ${allProducts
          .map(
            (product) => `<div>
        <ul>
            <li>${product.product_name}</li>
            <li>${product.product_price}</li>
            <li>${product.isInStock}</li>
            <li>${product.category}</li>
        </ul>
        </div>`
          )
          .join("")}
        `;
    res.send(html);
  } catch (error) {
    next(error);
  }
});

app.post("/shopApi/addProduct", async (req, res, next) => {
  try {
    const {
      product_name,
      product_price,
      isInStock,
      category,
      product_description,
    } = req.body;
    const product = await productModel.create({
      product_name,
      product_price,
      isInStock,
      category,
      product_description,
    });
    res.status(201).json({ message: "Product added", product });
  } catch (error) {
    next(error);
  }
});

app.patch("/shopApi/updateProduct/:id", async (req, res, next) => {
  try {
    const Id = req.params.id;
    const product = await productModel.findByIdAndUpdate(Id, req.body);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    const getUpdatedProduct = await productModel.findById(Id);
    res.status(200).json({ message: "product updated", getUpdatedProduct });
  } catch (error) {
    next(error);
  }
});

app.delete("/shopApi/deleteProduct/:id", async (req, res, next) => {
  try {
    const Id = req.params.id;
    const product = await productModel.findByIdAndDelete(Id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
