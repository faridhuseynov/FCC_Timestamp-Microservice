const express = require("express");
const app = express();

const port = process.env.PORT||3000;

app.use('/public',express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
})
app.get('/api/timestamp/',(req,res)=>{
    res.json({ unix: Date.now(), utc: Date()})
});

app.route('/api/timestamp/:date?')
.get((req,res)=>{
    var param = (req.params.date);
    var dateArray=[];
    if(/\d{5,}/.test(param)){
        var date = parseInt(param);
        res.json({ unix: date, utc: new Date(date).toUTCString() });
    }else{
        var date = new Date(param);
        if(date=="Invalid Date"){
            res.json({"error":"Invalid Date"});
        }else{
            res.json({ unix: date.getTime(), utc: date.toUTCString()})
        }
    }
})


// listen for requests :)
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
