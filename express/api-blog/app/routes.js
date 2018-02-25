var connection = require('./../config/database');
module.exports = function(app) {

    app.get('/', function(req, res) {
        connection.query('SELECT * from articles', function(err, rows, fields) {
            res.end(JSON.stringify(rows));
        });
    });

}