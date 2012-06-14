/**
 * Created with JetBrains WebStorm.
 * User: scottblissett
 * Date: 7/06/12
 * Time: 8:57 PM
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://buzzword:bingo@flame.mongohq.com:27023/buzzdb');

exports.words = require('./word.js').Words(db);