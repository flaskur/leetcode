/**
 * Given a number, determine if it is "happy." Meaning a number that is replaced by the sum of the square of all its digits and eventually equaling 1. The 1 case is a terminating case because 1^2 = 1 repeatedly.
 * I did this before but I guess I didn't save or push to the repo. The difficult part would probably be to choose a point when to stop the iteration.
 * 
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
	// A history of half pattern doesn't work because it can stop at some arbitrary point.
	// I need some way to detect if the pattern is repeating while not being to time intensive.

	// We expect that if we get the same number for a particular sum twice, then the pattern will inevitably repeat since it's the same operation.
	let history = {};
	let currentNum = n.toString();
	while (true) {
		let sum = 0;
		for (let char of currentNum) {
			// Essentially we want to calculate sum first and check if it's equal to 1.
			sum += Math.pow(parseInt(char, 10), 2);
			console.log(`The sum increments to ${sum}`);
		}
		console.log(`The final sum is ${sum}`);
		if (sum === 1) return true;

		// Pattern has repeated.
		if (history[sum]) return false;
		else history[sum] = true;

		// Needs to be the string so that we can easily access the digits.
		currentNum = sum.toString();
	}
};

// Okay, so this wasn't so bad once you figured out how to recognize a pattern. It wasn't actually recognizing a specific pattern but understanding that if a number repeats, the same operation would happen and hence repeat. The conversion to string was a convenience thing so that you can easily access and iterate through the digits, though if you didn't want cast to a different type you could continually loop with modulus 10 and update some number variable.
