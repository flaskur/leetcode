/**
 * Looks like a sequence of numbers. Given an integer between 1 and 30, generate the nth term of the count and say sequence. Actually really clever problem.
 * n denotes the number of sequences, not the starting number. It always starts at 1.
 * Recommends a recursive approach.
 * I would have a variable to keep track of count as a number. The time you append to the result string is when the number changes.
 * 13112221 is 1113213211. Basically the algorithm is count num count num etc.
 * 
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
	// Base case is when n is 0, but the problem is you can't pass the current sequence value as an argument.
	if (n === 1) return '1';

	// Working with strings that represent numbers.
	let start = '1';
	let newStart = '';
	let numCount = 0;
	let currentNum;

	// Iteration starts at 1 because we need to skip the initial case where n = 1 and do nothing.
	for (let i = 1; i < n; i++) {
		currentNum = start[0];
		for (let j = 0; j < start.length; j++) {
			// Do not add to new start until the current number changes.
			if (start[j] !== currentNum) {
				newStart += numCount.toString() + currentNum;
				numCount = 1;
				currentNum = start[j];
			} else {
				numCount += 1;
			}
		}
		newStart += numCount.toString() + currentNum;
		numCount = 0;
		currentNum = '';
		start = newStart;
		newStart = '';
		console.log(`n = ${i + 1} sequence is ${start}`);
	}

	return start;
};

// Solution done by basically iterating n - 1 times and using a memory string to update. I keep track of the count for each number and only add to the new string when the current num changes.
