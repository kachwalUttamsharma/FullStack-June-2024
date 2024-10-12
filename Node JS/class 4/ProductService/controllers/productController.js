const productModel = require("../models/Product");

const getAllProducts = async (req, res, next) => {
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
                <li>${product?.product_description}</li>
            </ul>
            </div>`
              )
              .join("")}
            `;
    res.send(html);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
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
};

const updateProduct = async (req, res, next) => {
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
};

const deleteProduct = async (req, res, next) => {
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
};

const getProductById = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  getProductById,
};
