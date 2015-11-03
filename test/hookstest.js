var hooks=require("../src/hooks");
var chai=require('chai');
var assert=chai.assert;

describe('hooks', function() {

 	 before(function() {
    // runs before all tests in this block
    assert.isString(hooks.listenBefore, 'validated');
          hooks.listenBefore();
       });
    
  	after(function() {
 // runs after all tests in this block
         hooks.listenAfter();    
     it('returns True if it is string', function(done) {
            assert.isString(hooks.myfun1(),'validates');
            done();
        });
  
	});
    
  	beforeEach(function() {
  // runs before each test in this block
          hooks.myfun1();
                      });
    
  	afterEach(function() {
  // runs after each test in this block
  	hooks.myfun2();
	  });
    
                              
});
