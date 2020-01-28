/**
 * Design a class solution using the JS prototype methodology
 */
const Solution = function(nums) {
	this.nums = nums;
};

Solution.prototype.reset = function() {
	return this.nums;
};

Solution.prototype.shuffle = function() {
	let clone = [ ...this.nums ];
	for (let i = 0; i < clone.length; i++) {
		let j = Math.floor(Math.random() * clone.length);
		[ clone[i], clone[j] ] = [ clone[j], clone[i] ];
	}

	return clone;
};
