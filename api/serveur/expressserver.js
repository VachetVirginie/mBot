var express = require('express');
var app = express();

app.use(express.static('api'));

app.get('/', function(req, res) {
    res.send('It s working bro !');
});

app.use(function(req, res, next) {


    res.status(404).send("Something get wrong");


});

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(3000, function() {
    console.log('lunched bro! enjoy ;)');
});