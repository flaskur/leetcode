/**
 * Find the longest common prefix string among an array of strings.
 * 
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
	// If empty array, no strings.
	if (strs.length === 0) return '';

	let common = '';

	// I only iterate to at most the smallest string. But that means I have to find the length of the smallest string with some iteration.
	let smallestLength = Math.pow(2, 31) - 1;

	strs.forEach((string) => {
		if (string.length < smallestLength) smallestLength = string.length;
	});

	for (let i = 0; i < smallestLength; i++) {
		let start = strs[0][i];
		for (let str of strs) {
			if (str[i] !== start) return common;
		}
		common += start;
		console.log(`common is now ${common}`);
	}

	return common;
};

// Done by finding the string with the smallest length, then going up to that index until a failure on one of the strings or a complete pass.
