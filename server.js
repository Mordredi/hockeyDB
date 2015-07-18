var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './public', '/index.html'));
});

http.listen(port, function(){
  console.log('Listening on port ' + port);
});