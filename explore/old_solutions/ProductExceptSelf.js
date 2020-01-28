/**
 * Given an array of nums with n integers such that n > 1, meaning array has more than 1 element, return an array output such that output[i] is the product of all the elements of nums except nums[i].
 * You can use the continue to avoid that iteration.
 */
// Brute force with double for loop. Must be O(n) though.
const productExceptSelf = function(nums) {
	let productArr = new Array(nums.length);
	productArr = productArr.fill(1);

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i == j) continue;

			productArr[i] *= nums[j];
		}
	}

	productArr.forEach((product) => {
		console.log(product);
	});

	return productArr;
};

// NOT ALLOWED TO USE DIVISION.
const productExceptSelf = function(nums) {
	let product = nums.reduce((total, current) => {
		return total * current;
	}, 1);

	let productArr = [];

	for (let i = 0; i < nums.length; i++) {
		productArr.push(product / nums[i]);
	}

	console.log(productArr);

	return productArr;
};

const productExceptSelf = function(nums) {
	let productArr = new Array(nums.length).fill(1);

	let multiplier = 1;

	for (let i = 0; i < nums.length; i++) {
		productArr[i] *= multiplier;
		multiplier *= nums[i];
	}

	multiplier = 1;

	for (let j = nums.length - 1; j >= 0; j--) {
		productArr[j] *= multiplier;
		multiplier *= nums[j];
	}

	return productArr;
};

// [1,2,3,4], logic is that you multiply the factors from both sides left and right. It works because it works cumulatively. The middle factors need both sides.
// [1,1,2,6] [24,12,8,6]
