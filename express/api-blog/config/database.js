var mysql       = require('mysql'),
    connection  = mysql.createConnection({
        host    : 'localhost',
        user    : 'root',
        password: 'mysql',
        database: 'api-blog'
    });

    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected!");
        } else {
            console.log("Error connectin database");
        }
    });

module.exports = connection;