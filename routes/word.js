/**
 * Created with JetBrains WebStorm.
 * User: scottblissett
 * Date: 5/06/12
 * Time: 11:01 PM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');

exports.list = function(req, res){
    res.render('words', {title: 'Words', words:words_DB });
};