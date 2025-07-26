const mysql=require("mysql2")
var q = mysql.createConnection({
    host:"localhost",
    database : "project1",
    user : "root",
    password: ""
})
module.exports=q ;