const express = require("express")
const productRoutes = require("./routes/productRoutes.js")

const app = express()
const port = 3000

app.use(express.json())
app.use(productRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})