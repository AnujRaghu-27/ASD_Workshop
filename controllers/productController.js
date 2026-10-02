const { getProducts, getProductById, addProduct, editProduct, editProductPartially, removeProduct } = require("../services/productService.js")
const { cache, clearCache } = require("../middleware/cache.js")

function getAllProducts(req, res) {
    try {
        const key = req.url

        const products = getProducts()

        cache[key] = {
            data: products,
            time: Date.now()
        }
        return res.json(products)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

function getProduct(req, res) {
    try {
        const key = req.url
        const { id } = req.params

        const product = getProductById(id)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        cache[key] = {
            data: product,
            time: Date.now()
        }

        return res.json(product)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

function createProduct(req, res) {
    try {
        const product = req.body

        const newProduct = addProduct(product)

        clearCache()

        return res.status(201).json(newProduct)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

function editProductById(req, res) {
    try {
        const { id } = req.params
        const product = req.body

        const updatedProduct = editProduct(id, product)

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        clearCache()

        return res.json(updatedProduct)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

function patchProductById(req, res) {
    try {
        const { id } = req.params
        const updates = req.body

        const updatedProduct = editProductPartially(id, updates)

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        clearCache()

        return res.json(updatedProduct)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

function deleteProductById(req, res) {
    try {
        const { id } = req.params

        const deletedProduct = removeProduct(id)

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        clearCache()

        return res.json(deletedProduct)
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    editProductById,
    patchProductById,
    deleteProductById
}