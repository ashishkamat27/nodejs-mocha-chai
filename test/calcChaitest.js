var chai= require('chai');
var calc=require('../src/calc');
var assert = chai.assert,  
    expect = chai.expect,
    should = chai.should(); // Note that should has to be executed
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      chai.assert.equal(-1, [1,2,3].indexOf(5));
      chai.assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe ('Calculator Using Chai',function() {
      describe ('#Addition Chai',function() {
      it('Checking Addition with Chai assert' ,function () {

        assert(calc.add(4,9) === 13, 'Expecting 13');
})
   it('Checking Addition with Chai expect' ,function () {

        expect(calc.add(9,7)).to.equal(16);
})
   it('Checking Addition with Chai should' ,function () {

        calc.add(7,9).should.equal(16);    
  
   	})
   });
  
	describe ('#Subtraction Chai',function() {
      it('Checking Subtraction with Chai assert' ,function () {

        assert(calc.sub(17,8) === 9, 'Expecting 9');
	})
   it('Checking Subtraction with Chai expect' ,function () {

        expect(calc.sub(9,7)).to.equal(2);
	})
   it('Checking Subtraction with Chai should' ,function () {

        calc.sub(7,9).should.equal(-2);

        })
   });
   describe ('#Multiplication Chai',function() {
      it('Checking Multiplication with Chai assert' ,function () {

        assert(calc.mul(15,8) ===120,'Expecting 120');
        })
   it('Checking Multiplication with Chai expect' ,function () {

        expect(calc.mul(9,7)).to.equal(63);
        })
   it('Checking Multiplication with Chai should' ,function () {

        calc.mul(23,8).should.equal(184);

        })
   });
describe ('#Division Chai',function() {
      it('Checking Division with Chai assert' ,function () {

        assert(calc.div(144,8) ===18,'Expecting 18');
        })
   it('Checking Division with Chai expect' ,function () {

        expect(calc.div(203,7)).to.equal(29);
        })
   it('Checking Division with Chai should' ,function () {

        calc.div(24,8).should.equal(3);

        })
   });

})
