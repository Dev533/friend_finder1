var express = require('express')
var bp = require('body-parser')
var path = require('path')

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

