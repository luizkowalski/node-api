var express = require('express'),
http = require('http'),
path = require('path'),
wine = require('./routes/wines');

var app = express();

app.configure(function () {
	app.use(express.logger('dev'));
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.bodyParser());
});

app.get('/wines', wine.findAll);
app.get('/wines/all', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

//app.listen(3000);
http.createServer(app).listen(3000);
console.log('Listening on port 3000...');
