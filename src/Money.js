/**
 * Safe handling of money via handling all currency equations.
 * @param int amountInCents Amount of currency represented in it's most whole form,
 *                          For example: cents in a Dollar.
 * @param String currency  Three letter ISO currency code, defaults to AUD.
 * @return Money instance of Money with the amountInCents set.
 */
var Money = function(amountInCents, currency) {
	if (amountInCents !== parseInt(amountInCents)) {
		throw('Amount in cents must be passed as an integer');
	}

  if (!currency) currency = 'AUD';

	this.amount = amountInCents;
  this.currency = currency;
};


/**
 * Addition for Money
 * @param int|Money amountInCents Either amount in cents as an integer or a Money
 *                                  instance.
 * @return Money This avoids ever having issues with objects being modified by reference.
 */
Money.prototype.add = function(amountInCents) {
  if (amountInCents instanceof Money) {
    amountInCents = amountInCents.getAmount();
  }

  var newAmount = amountInCents + this.getAmount();

  return new Money(newAmount);
};

/**
 * Subtraction for Money
 * @param int|Money amountInCents Either amount in cents as an integer or a Money
 *                                  instance.
 * @return Money This avoids ever having issues with objects being modified by reference.
 */
Money.prototype.subtract = function(amountInCents) {
  if (amountInCents instanceof Money) {
    amountInCents = amountInCents.getAmount();
  }

  var newAmount = this.getAmount() - amountInCents;

  return new Money(newAmount);
};

/**
 * Multiplication for Money
 * @param int multiplier Used to multiply this.amount.
 * @return Money This avoids ever having issues with objects being modified by reference.
 */
Money.prototype.multiply = function(multiplier) {
  var newAmount = multiplier * this.getAmount();

  return new Money(newAmount);
};

/**
 * Division for Money
 * @param int divisor Used to divide this.amount.
 * @return Money This avoids ever having issues with objects being modified by reference.
 */
Money.prototype.divide = function(divisor) {
  var newAmount = this.getAmount() / divisor;

  return new Money(newAmount);
};

/**
 * Gets the instance variable amount
 * @return int Amount in lowest whole form
 */
Money.prototype.getAmount = function() {
  return this.amount;
};

/**
 * Gets the instance variable currency
 * @return String ISO code for the currency code (eg AUD/USD)
 */
Money.prototype.getCurrency = function() {
  return this.currency;
}

// added module export so if ran with node, you can load this with require('Money');
if (typeof module != 'undefined' && module.exports) {
  module.exports = Money;
}
