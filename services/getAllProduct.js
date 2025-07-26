const router=require("express").Router();
const q = require("../dataBase/dbConnection")
router.get("/getAllProduct",(req,res)=>{
    q.execute("select * from products",(err,result)=>{
        res.json(result)
    })
})
module.exports=router;