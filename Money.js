var Money = function(amountInCents) {
	if (amountInCents !== parseInt(amountInCents)) {
		throw('Amount in cents must be passed as an integer');
	}

	this.amount = amountInCents;
}

Money.prototype.add = function(amountInCentsToAdd) {
	var newTotal = this.amount + amountInCentsToAdd;
	return new Money(newTotal); 
}

Money.prototype.subtract = function(amountInCentsToSubtract) {
	var newTotal = this.amount - amountInCentsToSubtract;

	return new Money(newTotal);
}
