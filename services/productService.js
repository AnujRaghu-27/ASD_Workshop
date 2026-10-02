const { readProducts } = require("../database/productDatabase.js")

function getProducts() {
    return readProducts()
}

function getProductById(id) {
    const products = readProducts()

    id = Number(id)

    const product = products.find((item) => {
        return item.id === id
    })

    return product
}

module.exports = {
    getProducts,
    getProductById
}