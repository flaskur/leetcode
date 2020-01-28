/**
 * Given two strings, write a function to determine if t is an anagram of s.
 * Two hash maps for count of characters then compare the counts.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
	let sCount = {};
	let tCount = {};

	Array.from(s).forEach((char) => {
		sCount[char] = sCount[char] + 1 || 1;
	});
	Array.from(t).forEach((char) => {
		tCount[char] = tCount[char] + 1 || 1;
	});
	// Now each hash map has a count. Undefined + 1 becomes NaN which is a falsey value.
	if (Object.keys(sCount).length !== Object.keys(tCount).length) {
		console.log('length');
		return false;
	}

	for (let key in sCount) {
		if (sCount[key] !== tCount[key]) return false;
	}

	return true;
};
