// list article
exports.list = function(req, res, next) {
  req.getConnection(function(err, connection){
    connection.query('SELECT articles.id as articleID, articles.title as articleTitle, articles.description as articleDesc, articles.created_at as articleDate, articles.updated_at as articleUpdate, category.id as catID, category.name as catName from articles LEFT JOIN category ON articles.category = category.id ORDER BY articles.id DESC', function(err, rows, fields) {
      if(err) {
        return next(err);
      } else {
        var arr = [];
        for (let i = 0; i < rows.length; i++) {
          arr.push({
            title       : rows[i].articleTitle,
            category    : rows[i].catName,
            description : rows[i].articleDesc.substring(0,78),
            created_at  : rows[i].articleDate,
            updated_at  : rows[i].articleUpdate
          });
        };
        res.end(JSON.stringify({
          status: 200,
          data: arr
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
      description : input.description,
      created_at  : new Date()
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