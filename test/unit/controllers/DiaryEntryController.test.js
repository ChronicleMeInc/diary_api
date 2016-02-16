var request = require('supertest');

describe('DiaryEntryController', function() {

  describe('#create()', function () {
    it('should create diary entry', function (done) {
      request(sails.hooks.http.app)
        .post('/diary_entry')
        .send({diary_entry:
        {
          hello: 'World'
        }
        }).expect(200, done)
    })
  });

  //describe('#all()', function () {
  //  it('should list all chat instances', function (done) {
  //    request(sails.hooks.http.app)
  //      .get('/diary_entrys')
  //      .send({})
  //      .expect(200, done)
  //  })
  //});
  //
  //describe('#show()', function () {
  //  it('should find a chat instance', function (done) {
  //    request(sails.hooks.http.app)
  //      .get('/diary_entrys/1')
  //      .send({})
  //      .expect(200, done)
  //  })
  //});

});
