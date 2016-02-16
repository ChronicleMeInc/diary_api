/**
 * DiaryEntryController
 *
 * @description :: Server-side logic for managing Diaryentries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
module.exports = {

  token: function (req, res) {
    console.log('token')
    var watson = require('watson-developer-cloud');
    var options = {};
    options.version = 'v1';
    options.username = "a7d5543c-81bf-4938-946f-9da80d2b904a";
    options.password = "DJtvneWQuxhC";
    options.url = "https://stream.watsonplatform.net/speech-to-text/api";
    var authorization = watson.authorization(options);
    var watson_token = authorization.getToken({url: options.url},function(token){
      return res.json({token: token})
    })
  },


  create: function (req, res) {

    var diary_entry = {}
    diary_entry.date = new Date();
    DiaryEntry.create(diary_entry).exec(function createCB(err, created){
      if (!err) {
        return res.json({
          diary_entry: file
        });
      }
    })
  }

};

