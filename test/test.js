/* global describe, it */
/* jshint expr: true */

// The above comment is a jshint comment that lets our
// program know that describe is a global for mocha
'use strict';

// require the mocha library assert to run this test
// node global variable 'require'
var assert = require('assert');
var expect = require('chai').expect;

// What's happening here
// describing an Array
// then describing the #indexOf
// then describe in words what we are doing
// assert that index of 5 in the array comes back -1
// 'it' is a specific task
// nested callbacks
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});


// another test
describe('Mocha', function () {
  it('should assert true', function () {
    assert(true);
  });
});


// chai
describe('Chai', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});





























