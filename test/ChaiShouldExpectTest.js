var chai=require('chai');
var expect=chai.expect;
var should=chai.should();
var foo = [];
foo["bar"]="ho";
foo["baz"]="hey";

var goodFn=function(){
return 1;
}
describe('Shoud and Expect',function () {
	context ('#not any all', function () {
		it("For not", function () {
	 		expect(foo).to.not.equal('bar');
			expect(goodFn).to.not.throw(Error);
			expect({ foo: 'baz' }).to.have.property('foo')
  			.and.not.equal('bar');
		});
		it("For Any" ,function () {
			expect(foo).to.have.any.keys('bar', 'baz');
        	  });
		it("For All",function () {
			expect(foo).to.have.all.keys('bar', 'baz');
		});
	});

	 context ('#a include/content empty ', function () {
                it("For a & an", function () {
                        expect('test').to.be.a('string');
			expect({ foo: 'bar' }).to.be.an('object');
			expect(null).to.be.a('null');
			expect(undefined).to.be.an('undefined');
                });
                it("For Include and contains" ,function () {
                        expect([1,2,3]).to.include(2);
			expect('foobar').to.contain('foo');
			expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
                  });
                it("For Empty",function () {
                       expect([]).to.be.empty;
			expect('').to.be.empty;
			expect({}).to.be.empty;
                });
        });
          context ('#eql above below most least  ', function () {
                it("For eql", function () {
                      expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
			expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
                });
                it("For Above" ,function () {
                        expect(10).to.be.above(5);
                  });
                it("For Least",function () {
                      expect(10).to.be.at.least(10);
                });
		it("For Below",function () {
                      expect(5).to.be.below(10);
                });
		 it("For Most",function () {
                     expect(5).to.be.at.most(5);
                });

        });

       

})
