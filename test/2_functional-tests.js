/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var server = require('../server');

chai.use(chaiHttp);
chai.should()

describe('Functional Tests', function() {

  describe('Routing Tests', function() {
    
    describe('GET /api/convert => conversion object', function() {
      
      it('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function(err, res){
          res.should.have.status(200);
          res.body.initNum.should.equal(10);
          res.body.initUnit.should.equal('L');
          res.body.returnNum.should.be.closeTo(2.64172, 0.1);
          res.body.returnUnit.should.equal('gal');
          done();
        });
      });
      
      it('Convert 32g (invalid input unit)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({ input: '32g' })
          .end(function(err, res) {
            res.should.have.status(400)
            done()
          })
      });
      
      it('Convert 3/7.2/4kg (invalid number)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({ input: '3/7.2/4kg' })
          .end(function(err, res) {
            res.should.have.status(400)
            done()
          })
      });  
      
      it('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({ input: '3/7.2/4kilomegagram' })
          .end(function(err, res) {
            res.should.have.status(400)
            done()
          })
      });
      
      it('Convert kg (no number)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({ input: 'kg' })
          .end(function(err, res) {
            res.should.have.status(400)
            done()
          })
      });
      
    });

  });

});
