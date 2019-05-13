/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input.split('.').length >= 3) {
      throw new TypeError(`Bad input: ${input}`)
    }
    
    const result = parseFloat(input);
    
    if (result) {
      return result
    }
    
    throw new TypeError(`Bad input: ${input}`)
  };
  
  this.getUnit = function(input) {
    const units = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG']
    const inputUnit = input.replace(/[0-9]/g, '').replace(/\./g, '')

    if (units.includes(inputUnit)) {
      return inputUnit
    }

    throw new TypeError(`Bad input: unit of '${input}' should be one of ${units.join(', ')}`)
  };
  
  this.getReturnUnit = function(initUnit) {
    if(!initUnit) {
      throw new TypeError(`Bad input: '${initUnit}' should be one of ${Object.keys(inputToOutputUnit).join(', ')}`)
    }
    const inputToOutputUnit = {
      'gal': 'l',
      'l': 'gal',
      'mi': 'km',
      'km': 'mi',
      'lbs': 'kg',
      'kg': 'lbs'
    }

    const returnUnit = inputToOutputUnit[initUnit.toLowerCase()]
    if (returnUnit) {
      return returnUnit
    }

    throw new TypeError(`Bad input: '${initUnit}' should be one of ${Object.keys(inputToOutputUnit).join(', ')}`) 
  };

  this.spellOutUnit = function(unit) {
    const abbrevToSpelledOut = {
      'gal': 'gallons',
      'l': 'liters',
      'mi': 'miles',
      'km': 'kilometers',
      'lbs': 'pounds',
      'kg': 'kilograms'
    }

    if (!unit) {
      throw new TypeError(`Bad input: '${unit}' should be one of ${Object.keys(abbrevToSpelledOut).join(', ')}`)
    }

    const spelledOutUnit = abbrevToSpelledOut[unit.toLowerCase()]
    if(spelledOutUnit) {
      return spelledOutUnit
    }

    throw new TypeError(`Bad input: '${unit}' should be one of ${Object.keys(abbrevToSpelledOut).join(', ')}`)
  };
  
  // TODO: improve error handling
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const coeffConverters = {
      'gal': galToL,
      'l': 1 / galToL,
      'lbs': lbsToKg,
      'kg': 1 / lbsToKg,
      'mi': miToKm,
      'km': 1 / miToKm
    }

    if(!initUnit) {
      throw new TypeError(`Bad input: '${initUnit}' should be one of ${Object.keys(coeffConverters).join(', ')}`)
    }

    const coeff = coeffConverters[initUnit.toLowerCase()]

    if (!coeff) {
      throw new TypeError(`Bad input: '${initUnit}' should be one of ${Object.keys(coeffConverters).join(', ')}`)
    }

    if(!initNum && initNum !== 0) {
      throw new TypeError(`Bad input: ${initNum}`)
    }

    return initNum * coeff

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
