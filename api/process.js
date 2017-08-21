let express = require('express');
let app = express();

app.post('/', function(res, req) {
    res.status(200).send(__dirname + '/api/up.js');
    console.log("ok");
})