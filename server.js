const express = require("express")
const { getAllProducts, getProduct } = require("./controllers/productController.js")
const { cacheMiddleware } = require("./middleware/cache.js")

const app = express()
const port = 3000

app.get("/products", cacheMiddleware, getAllProducts)
app.get("/products/:id", cacheMiddleware, getProduct)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})