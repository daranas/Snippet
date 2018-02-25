var express     = require('express'),
    connection  = require('./config/database'),
    port        = 3000,
    app         = express();

require('./app/routes')(app);

app.listen(port);
console.log('The magic happens on port ' + port);