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
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        convertHandler.getUnit(ele).should.equal(ele)
      });
      done();
    });
    
    it('Unknown Unit Input', function(done) {
      should.throw(() => convertHandler.getUnit('notAUnit'), TypeError)
      done();
    });  
    
  });
  
  describe('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    it('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];

      input.forEach(function(ele, i) {
        convertHandler.getReturnUnit(ele).should.equal(expect[i]);
      });

      done();
    });
    
  });  
  
  describe('Function convertHandler.spellOutUnit(unit)', function() {
    
    it('For Each Valid Unit Inputs', function(done) {
      const abbrevToSpelledOut = {
        'gal': 'gallons',
        'l': 'liters',
        'mi': 'miles',
        'km': 'kilometers',
        'lbs': 'pounds',
        'kg': 'kilograms',
        'GAL': 'gallons',
        'L': 'liters',
        'MI': 'miles',
        'KM': 'kilometers',
        'LBS': 'pounds',
        'KG': 'kilograms'
      }

      for(let abbrev in abbrevToSpelledOut) {
        convertHandler.spellOutUnit(abbrev).should.equal(abbrevToSpelledOut[abbrev])
      }

      done();
    });
    
  });
  
  describe('Function convertHandler.convert(num, unit)', function() {
    
    it('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;
      convertHandler.convert(input[0], input[1]).should.be.closeTo(expected, 0.1); // 0.1 tolerance
      done();
    });
    
    it('L to Gal', function(done) {
      const input = [19, 'l']
      const expected = 5.01927
      convertHandler.convert(input[0], input[1]).should.be.closeTo(expected, 0.1)
      done();
    });
    
    it('Mi to Km', function(done) {
      const input = [10, 'mi']
      const expected = 16.09344
      convertHandler.convert(input[0], input[1]).should.be.closeTo(expected, 0.1)
      done();
    });
    
    it('Km to Mi', function(done) {
      const input = [16, 'km']
      const expected = 9.94193908
      convertHandler.convert(input[0], input[1]).should.be.closeTo(expected, 0.1)
      done();
    });
    
    it('Lbs to Kg', function(done) {
      const input = [10, 'lbs']
      const expected = 4.5359237
      convertHandler.convert(input[0], input[1]).should.be.closeTo(expected, 0.1)
      done();
    });
    
    it('Kg to Lbs', function(done) {
      const input = [5, 'kg']
      const expected = 11.0231131
      convertHandler.convert(input[0], input[1]).should.be.closeTo(expected, 0.1)
      done();
    });
    
  });

});