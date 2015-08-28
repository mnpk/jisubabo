var express = require('express');
var app = express();

app.set('views', '.');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('home', {
    title: '지수 바보'
  });
});

app.get('/baboya', function(req, res) {
  res.send('지수 바보');
});


var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
