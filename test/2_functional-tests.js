/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

describe('Functional Tests', function() {

  describe('Routing Tests', function() {
    
    describe('GET /api/convert => conversion object', function() {
      
      it('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
      });
      
      it('Convert 32g (invalid input unit)', function(done) {
        
        //done();
      });
      
      it('Convert 3/7.2/4kg (invalid number)', function(done) {
        
        //done();
      });  
      
      it('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
        
        //done();
      });
      
      it('Convert kg (no number)', function(done) {
        
        //done();
      });
      
    });

  });

});