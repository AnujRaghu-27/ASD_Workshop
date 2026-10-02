const fs= require("fs")
const path= require("path")

const pathToFile=path.join(__dirname,"../db.json")

async function readProducts(){
    try{
        let data= await fs.readFileSync(pathToFile,"utf-8")
        return JSON.parse(data)
    }catch(err){
        console.log(err)
    }
}

module.exports={
    readProducts
}