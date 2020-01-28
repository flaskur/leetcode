/**
 * Given n versions, find the first bad one. This is a binary search but continue until you find the the index to the left is good. Variation of the target binary search.
 * 
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 * 
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
	// This is formatted weirdly. You are given the function to check but you return a function that returns a function that returns a number.
	/**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
	return function(n) {
		// The versions all start at 1.

		return helper(1, n, isBadVersion);
	};
};

const helper = function(low, high, isBadVersion) {
	console.log(`helper runs with low ${low} high ${high}`);
	let mid = Math.floor((low + high) / 2);
	console.log(`mid is ${mid}`);
	// End case is when it's the first bad version meaning the one before it must be good.
	if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
		console.log('found ans as', mid);
		return mid;
	} else if (!isBadVersion(mid)) {
		console.log('still good version, go to upper half.');
		return helper(mid + 1, high, isBadVersion);
	} else if (isBadVersion(mid)) {
		console.log('bad version but not first bad version, go to lower half');
		return helper(low, mid - 1, isBadVersion);
	} else {
		console.log('something wrong');
		return null;
	}
};

// Variation of binary search algorithm, but with a little twist. You aren't done if the target is correct, you also need to make sure the one before it evaluates to a good version. One other thing is that this doesn't use index methodology like in normal binary search of an array, instead it starts at index 1. Everything else stays the same though.
