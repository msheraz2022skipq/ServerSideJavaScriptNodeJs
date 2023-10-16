const chai = require('chai')
const expect = chai.expect
const calculator = require('../src/calculator')

describe("Asynchronous testing using Mocha and Chai",()=>{
    it("should add data asynchronously",(done)=>{
        calculator.addition(3,2,(added)=>{
            expect(added).to.equal(5).to.be.a("number");
            done();
        })
    })

    it("should subtract data asynchronously",(done)=>{
        calculator.subtraction(5,2,(subtract)=>{
            expect(subtract).to.equal(3).to.be.a("number");
            done();
        })
    })
})
