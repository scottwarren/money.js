var Money = function(amountInCents) {
	if (amountInCents !== parseInt(amountInCents)) {
		throw('Amount in cents must be passed as an integer');
	}

	this.amount = amountInCents;
};

Money.prototype.add = function(amountInCents) {
  var newAmount = amountInCents + this.getAmount();

  return new Money(newAmount);
};

Money.prototype.subtract = function(amountInCents) {
  var newAmount = amountInCents - this.getAmount();

  return new Money(newAmount);
};

Money.prototype.multiply = function(multiplyBy) {
  var newAmount = multiplyBy * this.getAmount();

  return new Money(newAmount);
};

Money.prototype.divide = function(divideBy) {
  var newAmount = this.getAmount() / divideBy;

  return new Money(newAmount);
};

Money.prototype.getAmount = function() {
  return this.amount;
};

// added module export so if ran with node, you can load this with require('Money');
if (typeof module != 'undefined' && module.exports) {
  module.exports = Money;
}
