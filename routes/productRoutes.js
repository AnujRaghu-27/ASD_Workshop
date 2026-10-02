const express = require("express")
const { getAllProducts, getProduct, createProduct, editProductById, patchProductById, deleteProductById } = require("../controllers/productController.js")
const { cacheMiddleware } = require("../middleware/cache.js")

const router = express.Router()

router.get("/products", cacheMiddleware, getAllProducts)
router.get("/products/:id", cacheMiddleware, getProduct)
router.post("/products", createProduct)
router.put("/products/:id", editProductById)
router.patch("/products/:id", patchProductById)
router.delete("/products/:id", deleteProductById)

module.exports = router