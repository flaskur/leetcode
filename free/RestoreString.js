/**
 * Given a string s and an integer array indices of the same length.
 * The string s is shuffled such that the char in the ith position moves to indices[i] in the shuffled string.
 * Looks like I iterate through the string and assign to restored string index.
 * 
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
	let restoredArr = new Array(s.length);

	[ ...s ].forEach((char, index) => {
		restoredArr[indices[index]] = char;
	});

	return restoredArr.join('');
};
