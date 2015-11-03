var assert = require('assert');

//var chai = require ('chai');
var calc = require('../src/calc.js');
 
    describe ('Calculator Test using Default Assertion', function () {
    describe('#Addition Test', function() {
        it('returns positive value of addition', function(done) {
            assert.equal(53,calc.add(35,18));
            done();
        });

        it('returns negative value of addition', function(done) {
            assert.equal(-13, calc.add(23,-36));
            done();
        });
    });


      describe('#Subtraction Tests', function() {
        it('returns result of subtraction', function(done) {
            assert.equal(-16,calc.sub(20,36));
            done();
        });

        it('returns result of subtraction', function(done) {
            assert.equal(7,calc.sub(16,9));
            done();
        });
    });


    describe('#Multiplication Tests', function() {
        it('returns true', function(done) {
            assert.equal(calc.mul(2, 2), 4);
            done();
        });

        it('returns false', function(done) {
            assert.equal(calc.mul(29,8), 232);
            done();
        });
    });
    
    describe('#Division Tests', function() {
        it('returns true', function(done) {
            assert.equal(calc.div(144,18), 8);
            done();
        });

        it('returns false', function(done) {
            assert.equal(calc.div(162,9), 18);
            done();
        });
    });
})
