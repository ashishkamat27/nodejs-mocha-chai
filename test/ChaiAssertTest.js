var chai=require('chai');
var assert=chai.assert;
var calc=require("../src/calc");
var obj = { val: 10 };
var fn1 = function() { obj.val = 13 };
var fn2=function() { obj.val=5};
describe ("Chai Assertion", function (){
	// 1 OK Not OK
	describe ("#OK Not OK",function() {
		it("For OK", function(done){

  			assert.ok('everything', 'everything is ok');
			assert.ok('false', 'this will fail');
			done();
		});
		it("For Not Ok",function(done){

			//assert.notOk('everything', 'this will fail');
			assert.notOk(false, 'this will pass');
			done();
		})

	});
	//2 Equal Not Equal Deep Equal Not Deep Equal Strict Equal Not Strict Equal
      describe ("#Equal Not Equal Deep Equal Not Deep Equal, Strict Equal Not Strict Equal ",function() {
                it("For Equal Not Equal", function(done){

                        assert.equal(3, '3', '== coerces values to strings');
			assert.notEqual(3, 4, 'these numbers are not equal');

                        done();
                });
                it("For Deep Equal Deep Not Equal",function(done){

                        assert.deepEqual({ tea: 'green' }, { tea: 'green' });
                        assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
                        done();
                });
		it("For Strict Equal Strict Not Equal",function(done){

                        assert.strictEqual(true, true, 'these booleans are strictly equal');
                        assert.notStrictEqual(3, '3', 'no coercion for strict equality');
                        done();
                });


        });
        describe ("#Is Above IsBelow Increase Decrease  ",function() {
                it("For Is Above", function(done){

                        assert.isAbove(5, 2, '5 is strictly greater than 2');

                        done();
                });
                it("For Is Below",function(done){

                        assert.isBelow(3, 6, '3 is strictly less than 6');
                        done();
                });
		it("For Increase",function(done){

                        assert.increases(fn1, obj, 'val')
                        done();
                });
                it("For Decrease",function(done){

                        assert.decreases(fn2, obj, 'val')
                        done();
                });



        });
          describe ("#For Type Of",function() {
                it("Checking Type Of", function(done){
		assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
		assert.typeOf(calc,'object', 'we have object again');
		assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
		assert.typeOf('tea', 'string', 'we have a string');
		assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
		assert.typeOf(null, 'null', 'we have a null');
		assert.typeOf(undefined, 'undefined', 'we have an undefined');
                        done();
                });
               
                        

	});
})
