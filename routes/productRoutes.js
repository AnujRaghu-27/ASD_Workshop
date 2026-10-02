const express = require("express")
const { getAllProducts, getProduct, createProduct, editProductById } = require("../controllers/productController.js")
const { cacheMiddleware } = require("../middleware/cache.js")

const router = express.Router()

router.get("/products", cacheMiddleware, getAllProducts)
router.get("/products/:id", cacheMiddleware, getProduct)
router.post("/products", createProduct)
router.put("/products/:id", editProductById)

module.exports = router