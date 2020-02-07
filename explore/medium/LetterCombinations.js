/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. The order of the result doesn't matter. 
 * 
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
	let result = [];
	if (digits.length === 0) return result;
	let map = [ '0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ];

	// Do a recursive operation that populate the result array. The function needs a couple arguments. Most significantly you need to keep track of current and index.
	helper(result, '', 0, digits, map);
	return result;
};

const helper = function(result, current, index, digits, map) {
	// Base case is when the current string has the same length as the digits string.
	if (current.length === digits.length) {
		result.push(current);
		return;
	}

	// The index takes care of what digit we are talking about. Use that as the key for the map.
	let letters = map[digits[index]];

	// Recursively call for each letter but make sure to update.
	[ ...letters ].forEach((letter) => {
		helper(result, current + letter, index + 1, digits, map);
	});
};
// That was pretty hard to understand. My original though with the hash and an array as a value would have been fine to use instead of an array. The hard part was understand that this was recursion in the first place. The direct index approach didn't work so since we needed to expand everywhere, recursion is a great choice.
