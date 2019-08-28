var express = require('express');
var app = express();
const port = 3000;
const path = require('path');


app.use(express.static('dist/angular-routing'));
app.get('*',  (req, res) => res.sendFile(path.resolve(__dirname,'dist','angular-routing','index.html')));

// app.use(express.static('re/'));
// app.get('*',  (req, res) => res.sendFile(path.resolve(__dirname,'re','index.html')));



app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port,()=>console.log(`server running on port:${port}`));
