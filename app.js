var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/', function (req, res) {
  console.log(res);
  res.end("Vi er her!");
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})