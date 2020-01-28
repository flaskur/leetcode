/**
 * Given a string find the length of the longest substr without repeating characters.
 * I think the obvious approach is to use a hash with the char as a key and boolean as a value. We only care about the length, but the basic approach of just starting at the beginning doesn't work. You need to make the hash in place and use a variable to keep the max.
 * I think I'm missing an edge case. Not even sure if the logic is correct. It's like slightly overlapping groups. Substring must keep order.
 * 
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
	// Edge case of an empty string is 0.
	if (s.length === 0) return 0;

	// The whitespace character is treated like every other character. You don't have to replace it with an arbitrary character, and it would break if * every occurred.

	let max = -Infinity;

	// Boolean hash to keep the character occurrences
	let hash = {};

	// Using a while loop here because we want to repeat an iteration on duplicate case.
	let i = 0;
	while (i < s.length) {
		// console.log(`The current character is ${s[i]}`);

		// Hash doesn't have the character, so populate with the character.
		if (hash[s[i]] === undefined) {
			// console.log(`${s[i]} added`);
			hash[s[i]] = true;
		} else if (hash[s[i]] === true) {
			// console.log(`${s[i]} repeats`);

			// We have encountered a repeat, set max to hash length and reset.
			max = Math.max(max, Object.keys(hash).length);

			// Reset the hash in global context.
			hash = {};

			// We backtrack and repopulate the hash with the characters until previous duplicate.
			let j = i - 1;
			while (s[j] !== s[i]) {
				hash[s[j]] = true;
				j -= 1;
			}

			// This should skip the i increment, effectively repeating the character.
			continue;
		}

		i += 1;
	}
	// This needed for when the string ends and it doesn't repeat in at the last char.
	max = Math.max(max, Object.keys(hash).length);

	// console.log(`The max is ${max}`);
	return max;
};

// The solution to this involves using a hash to keep track of the characters already encountered. When we encounter a duplicate we need to backtrack to the last duplicate case and populate the hash from that. We keep a max variable and return that in the end.
