const express=require("express");
const app=express();
const cors=require("cors")
// var q = require("./dataBase/dbConnection")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
/*
add product
getAllproduct
deleteproduct
ubdate
*/
app.use(require("./services/addProduct"))
app.use(require("./services/deleteProduct"))
app.use(require("./services/updateProduct"))
app.use(require("./services/getAllProduct"))





app.listen(4000)