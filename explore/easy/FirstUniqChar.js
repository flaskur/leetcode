/**
 * Given a string, find the first non repeating character and return the index. -1 if not found.
 * Solution is doing a single pass to populate a count hash map, then find the first instance of the count being less than 2 or on failure return -1. But you need the index though so you might need to iterate through the same string twice.
 * 
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
	// Do JS objects maintain the order of key insertion?
	let charCount = {};

	for (let i = 0; i < s.length; i++) {
		// if (charCount[s[i]] === undefined) charCount[s[i]] = 1;
		// else charCount[s[i]] += 1;

		charCount[s[i]] = charCount[s[i]] + 1 || 1;
	}
	// Now you have hash map of character counts.

	for (let j = 0; j < s.length; j++) {
		if (charCount[s[j]] < 2) return j;
	}

	return -1;
};
