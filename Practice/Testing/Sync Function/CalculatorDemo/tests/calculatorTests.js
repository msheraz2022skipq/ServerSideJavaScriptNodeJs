const chai = require('chai')
const expect = chai.expect

const calculator = require('../src/calculator')

describe('Test calculator functionalities...', ()=>{
    describe("Test addition functionality...",()=>{
        it("Should add two numbers...",()=>{
            expect(calculator.addition(2,2)).to.equal(4)
            expect(calculator.addition(2,10)).to.equal(12)
            expect(calculator.addition(1000,1234)).to.equal(2234)
        })
    })

    describe("Test division functionality",()=>{
        it("Should divide two numbers",()=>{
            expect(calculator.division(4,2)).to.equal(2)
            expect(calculator.division(-25,2)).to.equal(-12.5)
        })
        it("Should return undefined if denominator is zero",()=>{
            expect(calculator.division(4,0)).to.equal(undefined)
            expect(calculator.division(-25,0)).to.equal(undefined)
        })
    })
})