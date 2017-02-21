/**
 * Created by rafael.sousa on 21/02/2017.
 */


module.exports =  function(){

    var controller = {};
    controller.index = function(req, res){
        res.render('index', {nome:'Express'});
    };
    return controller;

};