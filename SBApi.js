/*
// Requiring the world
*/
var express = require('express'),
    starbucks = require('./routes/starbucks'),
    sb = express();

/*
// Configuring Basics
*/
sb.configure(function () {
    sb.use(express.logger('superman'));
    sb.use(express.bodyParser());
});

/*
// Earinating (listening)
*/
sb.get('/starbucks', starbucks.findAll);
sb.get('/starbucks/:position', starbucks.findById);
 
// Hello ThreeThousand 
sb.listen(3000);
console.log('Listening on port 3000...');