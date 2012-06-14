
/**
 * Module dependencies.
 */

var express = require('express')
    , site = require('./routes/site.js')
    , game = require('./routes/game.js')
    , word = require('./routes/word.js');

var app = module.exports = express.createServer();

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
app.get('/words/create',word.create);
app.post('/words/create',word.post);

// App listen

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
