/**
 * Design a stack data structure that supports push, pop, top, and retrieving the min element in constant time.
 */
const MinStack = function() {
	this.stack = [];
};

MinStack.prototype.push = function(x) {
	let num = parseInt(x, 10);
	if (isNaN(num)) return null;

	this.stack.push(num);
};

MinStack.prototype.pop = function() {
	if (this.stack.length === 0) return null;

	return this.stack.pop();
};

MinStack.prototype.top = function() {
	if (this.stack.length === 0) return null;

	return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
	if (this.stack.length === 0) return null;

	let min = Infinity;
	this.stack.forEach((element) => {
		if (element < min) min = element;
	});

	return min;
};
