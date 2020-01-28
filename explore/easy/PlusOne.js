/**
 * Given an non empty array of digits representing a non negative integer, add one to it and return the new array with the plus one representation.
 * The main issue with this is handling the carry case. I don't think you can simply convert it to an integer because of the instance where the array represents a number larger than unsigned integer max of 2^32 - 1.
 * You could iterate in reverse order and add one then check if the value is 10. Am I assured that the array elements are all single digits? If not, you would need to have a carry that subtracts 10.
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
	let lastDigit = digits[digits.length - 1] + 1;
	let carry = 1;
	if (lastDigit > 9) {
		carry = lastDigit / 10;
	}

	// Edge case only one digit that overflows. Technically doesn't work for value >= 100.
	if (digits.length === 1 && lastDigit > 9) return [ carry, lastDigit - 10 ];
	else if (digits.length === 1) return [ lastDigit ];

	// Iterate through each digit in reverse order and check if it overflows. If no overflow, we can assume that we just end, otherwise we go to next digit, increment, and check for overflow again.
	let i = digits.length - 1;
	while (i >= 0) {
		console.log(`Start with ${digits} and carry ${carry}`);
		// No more carry, only increment digit and return.
		if (digits[i] + carry < 10) {
			console.log('Adding carry does not overflow, return digits');
			console.log(`Current digit is ${digits[i]} and carry is ${carry}`);
			digits[i] += carry;
			console.log(`Digit is now ${digits[i]}`);
			return digits;
		} else if (digits[i] + carry >= 10) {
			console.log('Adding carry overflows, keep carry 1 and set place to subtract by 10.');
			digits[i] = digits[i] + carry - 10;
			carry = 1;
		}

		i -= 1;
	}

	console.log(`After going through digits is ${digits}`);

	// In the case that the first digit overflows, we need to push the carry in the front as a new digit.
	if (carry === 1) {
		console.log('Carry 1 front, do unshift.');
		digits.unshift(carry);
	}

	return digits;
};

// Other solution is much simpler that just sets to 0 if not less than. Doesn't keep track of carry value because it assumes carry is at most 1 which is fair.
// The easiest solution would be to convert the array into a string with join, then convert into an integer, add the 1, then convert back into an array, but this fails the large number case.
