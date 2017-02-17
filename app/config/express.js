/**
 * Created by rafael.sousa on 15/02/2017.
 */
//config/express.js

var express = require('express');

module.exports = function(){

    var app = express();

    //configuração de ambiente
    app.set('port', 3000);

    //middleware
    app.use(express.static('./public'));

    //abaixo do middleware express.static

    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    
    return app;
};

