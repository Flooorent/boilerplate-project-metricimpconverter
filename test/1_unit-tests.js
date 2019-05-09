/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
const ConvertHandler = require('../controllers/convertHandler.js');

const should = chai.should()

const convertHandler = new ConvertHandler();

describe('Unit Tests', function(){
  
  describe('Function convertHandler.getNum(input)', function() {
    
    it('Whole number input', function(done) {
      const input = '32L';
      convertHandler.getNum(input).should.equal(32);
      done();
    });
    
    it('Decimal Input', function(done) {
      const input = '32.0L'
      convertHandler.getNum(input).should.equal(32)
      done();
    });
    
    it('Fractional Input', function(done) {
      const input = '0.2L'
      convertHandler.getNum(input).should.equal(0.2)
      done();
    });
    
    it('Fractional Input w/ Decimal', function(done) {
      const input = '32.2L'
      convertHandler.getNum(input).should.equal(32.2)
      done();
    });
    
    it('Invalid Input (double fraction)', function(done) {
      const input = '32.2.2L'
      should.throw(() => convertHandler.getNum(input), TypeError)
      done();
    });
    
    it('No Numerical Input', function(done) {
      const input = 'L'
      should.throw(() => convertHandler.getNum(input), TypeError)
      done();
    }); 
    
  });
  
  describe('Function convertHandler.getUnit(input)', function() {
    
    it('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //assert
      });
      done();
    });
    
    it('Unknown Unit Input', function(done) {
      
      //done();
    });  
    
  });
  
  describe('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    it('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  describe('Function convertHandler.spellOutUnit(unit)', function() {
    
    it('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  describe('Function convertHandler.convert(num, unit)', function() {
    
    it('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    it('L to Gal', function(done) {
      
      //done();
    });
    
    it('Mi to Km', function(done) {
      
      //done();
    });
    
    it('Km to Mi', function(done) {
      
      //done();
    });
    
    it('Lbs to Kg', function(done) {
      
      //done();
    });
    
    it('Kg to Lbs', function(done) {
      
      //done();
    });
    
  });

});