const express = require("express");
const app = express();

// app.use(__dirname+'/public');

app.get('/',(req,res)=>{
    var query = req.query;
    res.send(query);
    console.log(query);
})