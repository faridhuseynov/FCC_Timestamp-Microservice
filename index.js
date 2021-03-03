const express = require("express");
const app = express();

const port = process.env.PORT||3000;

app.use('/public',express.static(__dirname+'/public'));
// app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
})
app.get('/api/timestamp/',(req,res)=>{
    var milliseconds = 0
    var dateArray=[];
    var date =new Date(Date.now());
    console.log(date);
    milliseconds = date.getTime();
    dateArray = date.toDateString().split(" ");
    res.json({ "unix":parseInt(milliseconds), "utc":`${dateArray[0]}, ${dateArray[2]} ${dateArray[1]} ${dateArray[3]} 00:00:00 GMT` });

})
app.route('/api/timestamp/:date?')
.get((req,res)=>{
    var param = (req.params.date);
    var check = param.includes("-");
    var milliseconds = 0
    var dateArray=[];
    if(check){
        var dateString = (param).split("-");
        var date = new Date(dateString[2], parseInt(dateString[0])-1, parseInt(dateString[1]));
        milliseconds = date.getTime();
        dateArray = date.toDateString().split(" ");
    }else{
              var date = new Date(parseInt(param));
        milliseconds = param;
    }
    if(date=="Invalid Date"){
        return res.json({"error":"Invalid Date"});
    }
    dateArray = date.toDateString().split(" ");
    res.json({ "unix":parseInt(milliseconds), "utc":`${dateArray[0]}, ${dateArray[2]} ${dateArray[1]} ${dateArray[3]} 00:00:00 GMT` });
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
