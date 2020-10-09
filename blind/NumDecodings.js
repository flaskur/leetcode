/**
 * A message being encoded to numbers using A-Z 1-26 mapping. Given a non empty string containing only digits, determine the num ways to decode it.
 * 
 * @param {string} s
 * @return {number}
 */
// Top Down Recursion --> Works but is slow and quite tedious.
const numDecodings = (s) => {
	// edge case
	if (!s || s === '0') {
		return 0;
	}

	// edge case
	if (s.length === 1) {
		return 1;
	}

	// using regular js obj hash map for memoization based on index
	const memo = {};

	// top down recursion
	const helper = (current, index) => {
		let result;
		
		// base case --> found valid decode route
		if (s === current) {
			return 1;
		}

		// cannot be decoded
		if (s[index] === '0') {
			memo[index] = 0;
			return 0;
		}
		
		// must take two digits, but two digits is invalid decode
		if (s[index + 1] === '0' && parseInt(s.slice(index, index + 2), 10) > 26) {
			memo[index] = 0;
			return 0;
		}
		// taking single digit 0 is not valid, must be 2 digits if second digit is 0
		if (s[index + 1] === '0') {
			if (memo[index + 2]) return memo[index + 2];
			result = helper(current + s.slice(index, index + 2), index + 2)
		} 
		// last element, cannot decode two digits
		else if (index === s.length - 1) {
			if (memo[index + 1]) return memo[index + 1];
			result = helper(current + s[index], index + 1)
		} 
		// taking two digits is not a valid decode
		else if (parseInt(s.slice(index, index + 2), 10) > 26) {
			if (memo[index + 1]) return memo[index + 1];
			result = helper(current + s[index], index + 1);
		} 
		// otherwise taking 1 or 2 digits are both valid paths
		else {
			if (memo[index + 1] && memo[index + 2]) return memo[index + 1] + memo[index + 2];
			result = helper(current + s[index], index + 1) + helper(current + s.slice(index, index + 2), index + 2);
		}

		memo[index] = result; // update memo

		// console.log(memo);
		
		return result;
	};

	return helper('', 0);
};

// Bottom Up Dynamic Programming
const numDecodings = (s) => {
	// edge case
	if (!s || s === '0') {
		return 0;
	}

	// edge case
	if (s.length === 1) {
		return 1;
	}

	const dp = new Array(s.length + 1).fill(0); // dp[index] represents num decodings for substring s[0:index + 1] where index is inclusive
	
	dp[0] = 1; // empty string
	if (s[0] !== '0') dp[1] = 1; // single digit

	// idea is that we build up num of valid paths by checking if taking 1 or 2 digits is valid and add up accumulated sum of that substring
	for (let i = 2; i < dp.length; i++) {
		let first = parseInt(s.slice(i - 1, i)); // single char
		let second = parseInt(s.slice(i - 2, i));
		// if taking a single digit is a valid path
		if (first >= 1 && first <= 9) {
			dp[i] += dp[i - 1];
		}
		// if taking two digits is a valid path
		if (second >= 10 && second <= 26) {
			dp[i] += dp[i - 2];
		}
	}

	return dp.pop();
};