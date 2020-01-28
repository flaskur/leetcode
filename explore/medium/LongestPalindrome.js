/**
 * Given a string, find the length of the longest palindromic substring in s, assuming the maximum length of s is 1000.
 * To check if something an arbitrary string is a palindrome, you can just check the reverse value. The problem here is that you don't really know the methodology to traverse the string. I imagine that it would be similar to the previous method to find longest non repeating substring using a backtracking method.
 * Brute force method? You could use two pointers i and j = i + 1 and check if the string slice from i to j is a palindrome. If so then overwrite a variable. What if the variable is the same length?
 * 
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
	let result = '';
	if (s.length === 0) return result;

	// Brute force method of using two pointers.
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			// End index is exclusive but we want to include it.
			let substring = s.slice(i, j + 1);
			console.log(`substring is ${substring}`);

			// Unsure about replacement policy. If palindrome, but same length as result, do you overwrite? -> Test Cases?
			// console.log([ ...substring ]);
			// console.log([ ...substring ].reverse());
			// Doesn't work because they hold two different references, but the same value.
			// console.log(`sub length ${substring.length}, result length ${result.length}`);

			if (substring === [ ...substring ].reverse().join('') && substring.length > result.length) {
				console.log(`larger palindrome found as ${substring}, overwriting result`);
				result = substring;
			}
		}
	}

	console.log(`result is ${result}`);
	return result;
};
// Brute force method fails because of timing out from terrible time complexity. Pretty sure it works for small cases though with limited characters.

// If we already found a palindrome, we can expand outwards by checking both ends. If they are the same, then you overwrite. This suggests that you should start from the middle. Also suggesting a hash table to store the palindromic checks, so maybe you would reference a boolean hash to see if it's in there. Otherwise you remove the two ends.
// If we choose an arbitrary middle, on failure case, how do we know whether to check left or right? Do we do both with recursion?

// Confusing given solution.
const longestPalindrome = function(s) {
	// Edge case.
	if (s.length === 0) return '';
	let start = 0;
	let end = 0;

	for (let i = 0; i < s.length; i++) {
		let length1 = helper(s, i, i);
		let length2 = helper(s, i, i + 1);
		let length = Math.max(length1, length2);

		if (length > end - start) {
			start = i - (length - 1) / 2;
			end = i + length / 2;
		}
	}

	return s.slice(start, end + 1);
};

const helper = function(s, left, right) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left -= 1;
		right += 1;
	}
	return right - left - 1;
};

// Discussion solution.
const longestPalindrome = function(s) {
	let max = '';
	for (let i = 0; i < s.length; i++) {
		let str1 = helper(s, i, i);
		let str2 = helper(s, i, i + 1);

		if (str1.length > max.length) max = str1;
		if (str2.length > max.length) max = str2;
	}
	return max;
};

const helper = function(s, i, j) {
	while (i >= 0 && j < s.length && s[i] === s[j]) {
		i -= 1;
		j += 1;
	}
	// i + 1 and j means that you disregard the last failure check.
	return s.slice(i + 1, j);
};

// So the logic to this solution is the center out method. However to do this you need to check every center which is why we iterate through the whole string. You also had to know that there are two cases for center, either odd or even meaning bab or baab. The helper function basically returns the slice of the string that is a palindrome given that center. If the string lengths from either are greater than max, then you overwrite the max string. That makes sense.
