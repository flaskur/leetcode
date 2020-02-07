/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. 
 * The brute force approach is by generating every single combination of parentheses and then validating them. I forgot how to validate it though. Okay, so the way you check is by using a stack data structure and popping off the last two if they match.
 * 
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
	let result = [];
	helper(result, '', 0, 0, n);
	return result;
};

const helper = function(result, current, open, close, max) {
	// Base case is when the current string is the same length as the num pairs * 2.
	if (current.length === max * 2) {
		result.push(current);
	}

	// We only build if we know the current combination will be valid, hence an opening parenthesis must be before the close one.
	if (open < max) {
		helper(result, current + '(', open + 1, close, max);
	}
	if (close < open) {
		helper(result, current + ')', open, close + 1, max);
	}
};
// Somewhat similar to the telephone letter combinations with the recursive approach, but does compares using number of open and closed parentheses. Still difficult to understand.
