const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/productController");
const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.post("/addProduct", addProduct);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getProductById/:id", getProductById);

module.exports = router;
