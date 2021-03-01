const express = require("express");
const app = express();

const port = process.env.PORT||3000;

var now =new Date();
const year = now.getFullYear();
const month = (now.getMonth()+1)<10?'0'+(now.getMonth()+1):(now.getMonth()+1);
const day = (now.getDay()<10?'0'+now.getDay():now.getDay());
const date = `${year}/${month}/${day}`;

app.use('/public',express.static(__dirname+'/public'));
// app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });