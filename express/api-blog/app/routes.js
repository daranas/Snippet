// controllers
var articles = require('./controllers/articles');

// routes
module.exports = function(app) {
  app.get('/', function(req, res){
    res.send("Hello World!");
  });
  // article
  app.get('/list', articles.list);
  app.post('/submit', articles.submit);
}