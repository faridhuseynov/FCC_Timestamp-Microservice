const express = require("express");
const app = express();

const port = process.env.PORT||3000;

app.use('/public',express.static(__dirname+'/public'));
// app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });