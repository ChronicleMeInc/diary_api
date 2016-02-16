module.exports = {
  token: function(){
    var watson = require('watson-developer-cloud');
    var options = {};
    options.version = 'v1';
    options.username = "a7d5543c-81bf-4938-946f-9da80d2b904a";
    options.password = "DJtvneWQuxhC";
    options.url = "https://stream.watsonplatform.net/speech-to-text/api";
    var authorization = watson.authorization(options);
    var watson_token = authorization.getToken({url: options.url},function(token){
      return token
    })
    console.log(watson_token)
    return watson_token
  }
};
