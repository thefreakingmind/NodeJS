var express = require('express')
var path = require('path')

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000);

