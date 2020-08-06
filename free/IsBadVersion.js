/**
 * You have n versions, find the first bad version which messed up the future versions.
 * We are given n versions so the most obvious way to it to just go front to back until we get false, but that's O(n). Also is a bad version guaranteed?
 * Instead of linear we could do a binary search starting with middle.
 * 
 * @param {function} isBadVersion
 * @return {function}
 */
// Linear search first. This is closure format.
const solution = (isBadVersion) => {
	// isBadVersion is the API to tell you if version n is bad or not.
	return (n) => {
		for (let i = 1; i <= n; i++) {
			if (isBadVersion(i)) return i;
		}

		return null; // No bad version found...
	};
};

// Binary search, using index thought process.
const solution = (isBadVersion) => {
	return (n) => {
		// Assuming index access...
		let low = 0;
		let high = n - 1;

		// Check condition?
		while (low < high) {
			let mid = Math.floor((low + high) / 2);

			if (isBadVersion(mid + 1)) {
				high = mid;
			} else {
				low = mid + 1;
			}
		}

		return low + 1; // Because of index.
	};
};
