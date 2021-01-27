const { response } = require('express');
var express = require('express')

var app = express()

app.listen(3000, function() {
    console.log("server started on port 3000");
})

// Middleware
app.use(function(req, res, next) {
    // console.log(Date.now());//
    req.name = 'Philippe';
    next()
})

// Index route
app.get('/', (req, res) => {
    res.send(req.name)
})

// contact route
app.get('/contact', (req, res) => {
    res.send("page contact")
})