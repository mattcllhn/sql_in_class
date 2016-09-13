var express= require('express');
var app = express();
var path = require('path');
var bodyParser= require('body-parser');
var urlEncodedParser= bodyParser.urlencoded({extended:false});
var port = process.env.PORT||8082;
var objectToSendBack={};
app.use(express.static('public'));

app.listen(port, function(){
  console.log('listening');
});//listend

app.get('/', function(req, res){
  console.log('base url hit');
});//app.get
app.post('/',urlEncodedParser, function(req, res){
  res.sendFile('public/index.html');
});//app.post
app.post('/poster',urlEncodedParser,function(req,res){
  console.log('poster hit with:',req.body);
  objectToSendBack=req.body;
  res.send(objectToSendBack);
});
