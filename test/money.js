var assert = require('assert');
var should = require('should');
var Money = require('../src/Money.js');

describe('Money', function() {
  describe('#getAmount()', function() {
    var tenDollars = new Money(1000);

    assert.equal(1000, tenDollars.getAmount());
  });

  describe('#add()', function() {
    it('should return a new instance of Money when add is ran', function() {
      var oneHundredDollars = new Money(10000);

      var twoHundredDollars = oneHundredDollars.add(10000);

      assert.equal(10000, oneHundredDollars.getAmount());
      assert.equal(20000, twoHundredDollars.getAmount());
      assert.equal(true, oneHundredDollars instanceof Money);
      assert.equal(true, twoHundredDollars instanceof Money);
    });
  });

  describe('#subtract()', function () {
    it('should return a new instance of Money when subtract is ran', function() {
      var oneHundredDollars = new Money(10000);

      var zeroDollars = oneHundredDollars.subtract(10000);

      assert.equal(10000, oneHundredDollars.getAmount());
      assert.equal(0, zeroDollars.getAmount());
      assert.equal(true, oneHundredDollars instanceof Money);
      assert.equal(true, zeroDollars instanceof Money);
    });
  });
  describe('#multiply()', function () {
    it('should return a new instance of Money when subtract is ran', function() {
      var oneHundredDollars = new Money(10000);

      var twoHundredDollars = oneHundredDollars.multiply(2);

      assert.equal(10000, oneHundredDollars.getAmount());
      assert.equal(20000, twoHundredDollars.getAmount());
      assert.equal(true, oneHundredDollars instanceof Money);
      assert.equal(true, twoHundredDollars instanceof Money);
    });
  });
  describe('#divide()', function () {
    it('should return a new instance of Money when subtract is ran', function() {
      var oneHundredDollars = new Money(10000);

      var twoHundredDollars = oneHundredDollars.divide(0.5);

      assert.equal(10000, oneHundredDollars.getAmount());
      assert.equal(20000, twoHundredDollars.getAmount());
      assert.equal(true, oneHundredDollars instanceof Money);
      assert.equal(true, twoHundredDollars instanceof Money);
    });
  });
});
