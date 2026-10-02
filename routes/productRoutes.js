const express = require("express")
const { getAllProducts, getProduct } = require("../controllers/productController.js")
const { cacheMiddleware } = require("../middleware/cache.js")

const router = express.Router()

router.get("/products", cacheMiddleware, getAllProducts)
router.get("/products/:id", cacheMiddleware, getProduct)

module.exports = router