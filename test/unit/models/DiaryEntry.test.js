describe.only('ChatInstanceModel', function() {

  // Define assert
  var assert = require("assert");

  describe('#create()', function() {
    it('should check create function', function (done) {
      var req = {};
      req.date = new Date();
      ChatInstance.create(req)
        .then(function(results) {
          assert.equal(req.ip, results.ip);
          done();
        })
        .catch(done);
    });
  });

});
