var express = require('express'),
    starbucks = require('./routes/starbucks'),
    app = express();

app.get('/starbucks', starbucks.findAll);
app.get('/starbucks/:position', starbucks.findById);
 
app.listen(3000);
console.log('Listening on port 3000...');