
/**
 * Module dependencies.
 */

var express = require('express')
    , site = require('./routes/site.js')
    , game = require('./routes/game.js')
    , word = require('./routes/word.js')
    , mongoose = require('mongoose');

var app = module.exports = express.createServer();

var db = mongoose.connect('mongodb://localhost/buzzwordbingo');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes - Site General
app.get('/', site.index);

// Routes - Games

app.all('/games', game.list);

// Routes - Words

app.all('/words', word.list);

// App listen

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
