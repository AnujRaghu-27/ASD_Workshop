const { getProducts, getProductById } = require("../services/productService.js")
const { cache } = require("../middleware/cache.js")

function getAllProducts(req, res) {
    try {
        const key = req.url

        const products = getProducts()

        cache[key] = products
        return res.json(products)
    } catch (err) {
        console.log(err)
    }
}

function getProduct(req, res) {
    try {
        const key = req.url
        const { id } = req.params

        const product = getProductById(id)

        cache[key] = product

        return res.json(product)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllProducts,
    getProduct
}