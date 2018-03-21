var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

// Always send index.html
app.get('/*',(request, response, next) => {
  response.sendFile('index.html', { root:  "./dist"});
});

console.log('server started '+ port);
