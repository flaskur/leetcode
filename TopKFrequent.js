/**
 * Given a non-empty array of integers, return the k most frequent elements.
 * For this, the most obvious approach to me is to do like a count hash and then access based on count. However, that doesn't really solve the issue because you don't know how to detect if the result has the largest count or not. I guess you could iterate through the whole thing and keep a variable, but that's pretty bad for complexity. At that point it's not really worth it. You can't just sort it normally because that would be pointless and not account for frequency.
 * Ok, I'm gonna make a count hash with one iteration, then sort by the count amount with merge sort.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
	let countHash = {};
	for (let num of nums) {
		if (countHash[num] === undefined) countHash[num] = 1;
		else countHash[num] += 1;
	}
	for (let key in countHash) {
		console.log(`key ${key} value ${countHash[key]}`);
	}
	let arr = [];
	for (let key in countHash) {
		// Dot operator on object assumes undeclared string. You need to use bracket notation for string variables you already have.
		let obj = {};
		obj[key] = countHash[key];
		arr.push(obj);
	}
	console.log(arr);

	// Now sort based on frequency value.
	arr.sort((a, b) => {
		let left = Object.values(a)[0];
		let right = Object.values(b)[0];
		return left - right;
	});

	console.log(arr);

	let temp = arr.map((x) => {
		return Object.keys(x)[0];
	});

	let result = [];
	for (let i = 0; i < k; i++) {
		result.push(temp.pop());
	}

	return result;
};

// This one was almost purely manipulation with arrays and object but it was confusing because of the object syntax and how it required brackets and I had forgotten that. I used a sort method with object access, but to expand that, I would have used a merge sort method.
