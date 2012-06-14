var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var Word = new Schema({
   text : String,
   found : Number
});

Word.virtual('id')
    .get(function() {
        return this._id.toHexString();
    });

mongoose.model('Word', Word);

exports.Words = function(db) {
    return db.model('Word');
}

//
//var BlogPost = new Schema({
//    author    : ObjectId
//    , title     : String
//    , body      : String
//    , date      : Date
//});