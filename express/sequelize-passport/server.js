var express = require('express'),
    app = express(),
    passport = require('passport'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    env = require('dotenv').load(),
    exphbs = require('express-handlebars');

// body parser
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
  res.send("Hello World");
})

app.listen(5000, function(err){
  if(!err)
    console.log("Site is live")
  else console.log(err)
})