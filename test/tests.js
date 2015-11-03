var chai=require('chai');
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

  var foobar = {
        sayHello: function() {
          return 'Hello World!';
        }
	};
describe('Foobar', function() {  
  describe('#sayHello()', function() {
    it('should work with assert', function() {
      
      assert(foobar.sayHello() === 'Hello World!','Expecting Hello World');
    })
	  it('should work with expect', function() {
      expect(foobar.sayHello()).to.equal('Hello World!');
    })

    it('should work with should', function() {
      foobar.sayHello().should.equal('Hello World!');
    })
  })
})
