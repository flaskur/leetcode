/**
 * Given a roman numberal string, convert it to an integer. The input range is guaranteed to be between 1 to 3999.
 * How do you distinguish between adding or subtracting? Possibly keeping it in a variable and only adding or subtracting once you encounter a different character. However, roman numerals work in a way such that the subtraction will not repeat. IV, IIV doesn't exist. So perhaps a policy of check the next character and seeing if the value is greater than it, then we know to subtract.
 * 
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
	let romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	if (s.length === 0) return 0;
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		// Edge case of invalid character, return 0.
		if (romanMap[s[i]] === undefined) return undefined;

		if (romanMap[s[i]] < romanMap[s[i + 1]] && i < s.length - 1) sum -= romanMap[s[i]];
		else sum += romanMap[s[i]];
	}

	return sum;
};
