let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "",
    user: "",
    password: ""
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa")
    }
})