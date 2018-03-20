var express         = require('express'),
    mysql           = require('mysql'),
    config          = require('./config'),
    setConnection   = require('express-myconnection'),
    port            = config.port,
    bodyParser      = require('body-parser'),
    app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(setConnection(mysql, config.database, 'single'));

require('./app/routes')(app);

app.listen(port);
console.log('The magic happens on port ' + port);