const fs= require("fs")
const path= require("path")

const pathToFile=path.join(__dirname,"../db.json")

function readProducts(){
    try{
        let data= fs.readFileSync(pathToFile,"utf-8")
        return JSON.parse(data)
    }catch(err){
        console.log(err)
    }
}

function insertProduct(product) {
    const products = readProducts()

    products.push(product)

    fs.writeFileSync(
        pathToFile,
        JSON.stringify(products, null, 2)
    )

    return product
}

function updateProduct(id, updatedProduct) {
    const products = readProducts()

    id = Number(id)

    const index = products.findIndex((item) => {
        return item.id === id
    })

    if (index === -1) {
        return null
    }

    products[index] = updatedProduct

    fs.writeFileSync(
        pathToFile,
        JSON.stringify(products, null, 2)
    )

    return updatedProduct
}

module.exports={
    readProducts,
    insertProduct,
    updateProduct
}