/**
 * Created with JetBrains WebStorm.
 * User: scottblissett
 * Date: 5/06/12
 * Time: 11:01 PM
 * To change this template use File | Settings | File Templates.
 */

var db = require('../models/db.js');

exports.list = function(req, res){
    res.render('words', {title: 'Words', words:db.words });
};

exports.create  = function(req,res){
    res.render('words/create', {title: 'Create a new BuzzWord'});
};

exports.post = function(req,res){
  var word = new db.words();
    word.text = req.body.text;
    word.found = 0; // new word

    word.save(function(err){
        if(!err){
            res.redirect('/words');
        }
        else{
            throw new Error('Word Save Error!');
        }
    });


};