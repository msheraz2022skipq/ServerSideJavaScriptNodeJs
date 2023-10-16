const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction,multiplication, division } = require('../src/calculatorApp');

describe('Multiplication Functionality', () => {
  it('Check for multiplying two positive number and return positive product', () => {
    expect(multiplication(3, 8)).to.equal(24);
  });

  it('Check for multiplying two negative numbers and return positive product', () => {
    expect(multiplication(-3, -6)).to.equal(18);
  });

  it('Check if either of number is negative produce negative product', () => {
    expect(multiplication(3, -7)).to.equal(-21);
  });

  it('Multiply zero will produce zero as product', () => {
    expect(multiplication(0, 8)).to.equal(0);
  });
});
describe('Division Functionality', () => {
  it('Check for divide two positive number and return positive output', () => {
    expect(division(39, 13)).to.equal(3);
  });

  it('Check for divide two negative numbers and return positive output', () => {
    expect(division(-60, -12)).to.equal(5);
  });



  it('Check if either of number is negative produce negative output', () => {
    expect(division(44, -11)).to.equal(-4);
  });

  it('Divide zero must produce error', () => {
    expect(division(39, 0)).to.equal('error');
  });
});




describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    it("Should add two positive numbers...",()=>{
      expect(addition(2,2)).to.equal(4)
      expect(addition(2,10)).to.equal(12)
      expect(addition(1000,1234)).to.equal(2234)
  })
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
      expect(addition(-2,-2)).to.equal(-4)
      expect(addition(-2,-10)).to.equal(-12)
      expect(addition(-1000,-1234)).to.equal(-2234)
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    expect(addition(-2,2)).to.equal(0)
    expect(addition(2,-10)).to.equal(-8)
    expect(addition(-1000,500)).to.equal(-500)
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    expect(subtraction(2,2)).to.equal(0)
    expect(subtraction(10,8)).to.equal(2)
    expect(subtraction(1000,500)).to.equal(500)
  });
  it('Check if either of number is negative produce sum as output', () => {
    expect(subtraction(2,-2)).to.equal(4)
    expect(subtraction(-10,8)).to.equal(-18)
    expect(subtraction(1000,-500)).to.equal(1500)
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    expect(subtraction(0,0)).to.equal(0)
  });
});
