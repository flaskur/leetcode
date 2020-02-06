/**
 * A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts. 
 * For this you could use the two pointers method and check every combination with string slices. The check to see if there is a duplicate will also be costly. We are using an exclusion policy? So if i is 1 and j is 5, the portions would be s.slice(0, i), s.slice(i, j), and s.slice(j, s.length). I should start at 1 and j should start at i + 1. Since we are exclusive j ends at s.length - 1.
 * 
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = function(s) {
	let result = [];
	for (let i = 1; i < s.length - 1; i++) {
		for (let j = i + 1; j < s.length; j++) {
			let first = [ ...s.slice(0, i) ];
			let second = [ ...s.slice(i, j) ];
			let third = [ ...s.slice(j, s.length) ];
			if (noDuplicates(first) && noDuplicates(second) && noDuplicates(third)) {
				result.push(first.length);
				result.push(second.length);
				result.push(third.length);
			}
		}
	}
};

const noDuplicates = function(arr) {
	let hash = {};
	for (let i = 0; i < arr.length; i++) {
		if (hash[arr[i]] === true) return false;
		else hash[arr[i]] === true;
	}
	return true;
};
