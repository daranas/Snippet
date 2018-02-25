var express     = require('express'),
    connection  = require('./config/database'),
    app         = express();

app.get('/', function(req, res) {
    connection.query('SELECT * from articles', function(err, rows, fields) {
        res.end(JSON.stringify(rows));
    });
});

app.listen(3000);