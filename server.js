const express=require('express')
const path=require('path')
const fs=require("fs")

const app=express()
const port=3000

const pathToFile=path.join(__dirname,"db.json")

async function readFile(){
    try{
        let data= await fs.readFileSync(pathToFile,"utf-8")
        return JSON.parse(data)
    }catch(err){
        console.log(err)
    }
}

app.get("/products",async(req,res)=>{
    try{
        let products= await readFile()
        res.json(products)
    }catch(err){
        console.log(err)
    }
})

app.get("/products/:id",async(req,res)=>{
    try{
        let products= await readFile()
        let {id}=req.params
        id=Number(id)
        let product=products.find((item)=>{
            return item.id===id
        })
        res.json(product)
    }catch(err){
        console.log(err)
    }
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})