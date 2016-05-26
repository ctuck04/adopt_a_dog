var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/', require('./handlebar_lab/routes/index.js'));

app.set('views', path.join(__dirname, 'app_server', 'views'));

var handlebars = require('express-handlebars')
    .create({defaultLayout: '../../app_server/views/layouts/main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use('/', require('./app_server/routes/index'));

//app.use('/', require('./adopt_a_dog/views/layouts/main'));

app.use(function(req, res){
  res.status(404);
  res.send('404');
});

app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500);
  res.send('500');
});

app.listen(3000, function(){
  console.log('Adopt_a_dog app started on http://localhost:' +
  3000 + '; press ctrl-c to terminate.');
});
