const express=require("express");
const app=express();
const mysql=require("mysql2")
const cors=require("cors")
var q = mysql.createConnection({
    host:"localhost",
    database : "project1",
    user : "root",
    password: ""
})
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
/*
add product
getAllproduct
deleteproduct
ubdate
*/
app.post("/addProduct",(req,res)=>{
    var {name,price,description}=req.body
    q.execute(`insert into products(name,price,description) values('${name}',${price},'${description}')`)
    res.json("sucess")
})
app.delete("/deleteProduct",(req,res)=>{
    var {id} = req.body ;
    q.execute(`delete from products where id = ${id} `)
    res.json("sucess")
})
app.put("/updateProduct",(req,res)=>{
    var {id, name,price,description}=req.body ;
    q.execute(`update products set name='${name}' , price=${price} , description = '${description}' where id = ${id} `)
    res.json("sucess")

})


app.get("/getAllProduct",(req,res)=>{
    q.execute("select * from products",(err,result)=>{
        res.json(result)
    })

})
app.listen(4000)