var util = require('../util.test');
var config = require('../config.test');

module.exports = function() {
  util.request('https://https.w2.org/index.html', function(res, data) {
    data.body.should.be.equal('test');
  });
  
  util.request('https://https1.w2.org:' + config.httpsPort + '/index.html', function(res, data) {
    data.body.should.be.equal('test');
  });
  
  util.request('http://https1.w2.org:' + config.serverPort + '/index.html', function(res, data) {
    data.type.should.be.equal('server');
  });
  
  util.request('https://https2.w2.org:' + config.httpsPort + '/index.html', function(res, data) {
    data.body.should.be.equal('test');
  });
  
  util.request('http://https2.w2.org/index.html', function(res, data) {
    data.type.should.be.equal('server');
  });
  
  util.request('http://https3.w2.org:5566/index.html', function(res, data) {
    data.body.should.be.equal('test');
  });
  
  util.request('http://whistle-ssl.https.w2.org:' + config.httpsPort + '/index.html', function(res, data) {
    data.body.should.be.equal('test');
  });
};
