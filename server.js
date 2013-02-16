var express = require('express'),
	app = express(),
	configProps = require('./config.json');

app.engine('.html', require('ejs').__express);

app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('index.html', {});
});


app.listen(configProps.port, configProps.hostName);