// list article
exports.list = function(req, res, next) {
    req.getConnection(function(err, connection){
        connection.query('SELECT * from articles', function(err, rows, fields) {
            if(err) {
                return next(err);
            } else {
                res.end(JSON.stringify({
                    status: 200,
                    data: rows
                }));
            }
        });
    });
};

// submit article
exports.submit = function(req, res) {
    var input  = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function(err, connection){
        var data = {
            title       : input.title,
            category    : input.category,
            description : input.description
        };

        connection.query('INSERT INTO articles set ? ', data, function(err, rows){
            if(err) {
                return next(err);
            } else {
                res.json({
                    status: 200,
                    data: rows
                });
            }
        });
    });
};