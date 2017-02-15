/**
 * Created by rafael.sousa on 15/02/2017.
 */
//config/express.js

var express = require('express');

module.exports = function(){

    var app = express();
    app.set('port', 3000);
    return app;
};

