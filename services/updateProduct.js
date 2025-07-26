const router=require ("express").Router();
const q = require("../dataBase/dbConnection")

router.put("/updateProduct",(req,res)=>{
    var {id, name,price,description}=req.body ;
    q.execute(`update products set name='${name}' , price=${price} , description = '${description}' where id = ${id} `)
    res.json("sucess")
})
module.exports=router;