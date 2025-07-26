const router=require("express").Router();
const q = require("../dataBase/dbConnection")
router.delete("/deleteProduct",(req,res)=>{
    var {id} = req.body ;
    q.execute(`delete from products where id = ${id} `)
    res.json("sucess")
})
module.exports=router;
