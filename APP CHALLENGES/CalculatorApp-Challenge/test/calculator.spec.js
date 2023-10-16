const assert = require('chai');
const expect = assert.expect
const packageFile = require('../package.json');
const calculate = require('../calculator');
const glob = require('glob');
const fs = require('fs');

// variable declairation
let sum = 0;
let sub = 0;
let mul = 0;
let div = 0;

// testsuit
describe('Calculator testing', function () {
  describe('Functionality testing', function () {
    describe('Addition functionality testing', function () {
      // testcase to test is dependencies are used or not
      it('Add two positive numbers, returning get positive sum', function () {
        expect(calculate('A',{lhs:2,rhs:2})).to.equal(4)
        expect(calculate('A',{lhs:2,rhs:10})).to.equal(12)
        expect(calculate('A',{lhs:1000,rhs:1234})).to.equal(2234)
      });
      // test case to test add functionality

      it('Add two negative numbers, returning get negative sum', function () {
        expect(calculate('A',{lhs:-2,rhs:-2})).to.equal(-4)
        expect(calculate('A',{lhs:-2,rhs:-10})).to.equal(-12)
        expect(calculate('A',{lhs:-1000,rhs:-1234})).to.equal(-2234)
      });

      // test case to test add functionality
      it('Add two number, with either of them is negative, producing subtracted output'
        , function () {
          expect(calculate('A',{lhs:-2,rhs:2})).to.equal(0)
          expect(calculate('A',{lhs:-2,rhs:10})).to.equal(8)
          expect(calculate('A',{lhs:-1000,rhs:500})).to.equal(-500)
        });
      // test case to test add functionality
      it('Add zeros, produces zero', function () {

        expect(calculate('A',{lhs:0,rhs:0})).to.equal(0)
      });
    });
    describe('Subtraction functionality testing', function () {
      // test case to test subtract functionality
      it('Subtract two positive numbers, returning get positive subtraction',
        function () {
          expect(calculate('S',{lhs:4,rhs:2})).to.equal(2)
          expect(calculate('S',{lhs:1000,rhs:200})).to.equal(800)
          expect(calculate('S',{lhs:150,rhs:50})).to.equal(100)
        });

      // test case to test subtract functionality
      it('Subtract two negative numbers, returning get negative subtraction',
        function () {
          expect(calculate('S',{lhs:-4,rhs:-2})).to.equal(-2)
          expect(calculate('S',{lhs:-1000,rhs:-200})).to.equal(-800)
          expect(calculate('S',{lhs:-150,rhs:50})).to.equal(-200)
        });

      // test case to test subtract functionality
      it('Subtract two number, with either of them is negative, producing sum output'
        , function () {
          expect(calculate('S',{lhs:-4,rhs:2})).to.equal(-6)
          expect(calculate('S',{lhs:-1000,rhs:200})).to.equal(-1200)
          expect(calculate('S',{lhs:150,rhs:-50})).to.equal(200)
        });

      // test case to test subtract functionality
      it('Subtract zeros, produces zero', function () {
        expect(calculate('S',{lhs:0,rhs:0})).to.equal(0)
      });
    });
    describe('Multiplication functionality testing', function () {
      // test case to test multiply functionality
      it('Multiply two positive numbers, returning get positive Multiplication', function () {
        expect(calculate('M',{lhs:4,rhs:2})).to.equal(8)
      });
      // test case to test multiply functionality
      it('Multiply two negative numbers, returning get positive Multiplication', function () {
        expect(calculate('M',{lhs:-6,rhs:-3})).to.equal(18)
      });
      // test case to test multiply functionality
      it(`Multiply two number, with either of them is negative,
        producing negative multiplication output`,
        function () {
          expect(calculate('M',{lhs:3,rhs:-7})).to.equal(-21)
        });

      // test case to test multiply functionality
      it('Multiply zeros, produces zero', function () {
        expect(calculate('M',{lhs:0,rhs:2})).to.equal(0)
      });
    });
    describe('Division functionality testing', function () {
      // test case to test divide functionality

      it('Divide two positive numbers, returning get positive Multiplication', function () {
        expect(calculate('D',{lhs:39,rhs:13})).to.equal(3)
      });


      // test case to test divide functionality
      it('Divide two negative numbers, returning get positive Multiplication', function () {
        expect(calculate('D',{lhs:-60,rhs:-5})).to.equal(12)
      });

      // test case to test divide functionality

      it('Divide two number, with either of them is negative, producing negative Division output',
        function () {
          expect(calculate('D',{lhs:60,rhs:-12})).to.equal(-5)
        });

      // test case to test divide functionality
      it(`Should not divide by 0, producing 'Can not divide by zero' message`, function () {
        expect(calculate('D',{lhs:4,rhs:0})).to.equal("Can not divide by zero")
      });
    });
    describe('Unknown operation testing', function () {
      // test case to test divide functionality
      it(`should not calculate if unknown operation is passed,
        producing 'Unknown operation' message`,
        function () {
          expect(calculate('X',{lhs:4,rhs:2})).to.equal("Unknown operation")
        });
    });
  });
});