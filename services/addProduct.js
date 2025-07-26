
var router=require("express").Router();
const q = require("../dataBase/dbConnection")
router.post("/addProduct",(req,res)=>{
    var {name,price,description}=req.body
    q.execute(`insert into products(name,price,description) values('${name}',${price},'${description}')`)
    res.json("sucess")
})
module.exports=router ;