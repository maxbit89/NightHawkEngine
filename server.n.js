
var express = require('express');
var app = express();

var wwwDir = __dirname+"/www"

//serveModule("three", "build")

app.get('/', function(req, res) {
    res.sendFile(wwwDir+"/index.htm");
});
app.use(express.static(wwwDir));

app.listen(8080, function () {
    console.log("Server Started!")
});

