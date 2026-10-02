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

module.exports={
    readProducts
}