const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

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
    expect(subtraction(2,0)).to.equal(2)
    expect(subtraction(10,0)).to.equal(10)
    expect(subtraction(-1000,0)).to.equal(-1000)
  });
});
