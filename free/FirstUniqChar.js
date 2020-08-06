/**
 * Given a string, find the first nonrepeating character in it and return its index. If it doesn't exist, return -1.
 * You can make a count hash and then iterate again to check if the count is 1.
 * 
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
	let hash = {};

	[ ...s ].forEach((char) => {
		// Must use [] because char is a string.
		hash[char] ? hash[char]++ : (hash[char] = 1);
	});

	for (let key in hash) {
		console.log(key, hash[key]);
	}

	for (let i = 0; i < s.length; i++) {
		if (hash[s[i]] === 1) return i;
	}

	return -1;
};
