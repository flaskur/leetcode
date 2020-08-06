/**
 * Given an arbitrary ransom note string and another string with letters from all magazines, write a function that will return true if it can be constructed from the magazines.
 * Basically, you need to check that the ransomNote string is a substring in any order of the magazine string.
 * I would create a count hash map of the ransom note and iterate through the magazine until the counter matches.
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
	// Edge case empty string.
	if (ransomNote.length === 0 || ransomNote === magazine) return true;

	// Create a count hash for the ransom note string.
	let hash = new Map();
	for (let char of ransomNote) {
		hash.get(char) === undefined ? hash.set(char, 1) : hash.set(char, hash.get(char) + 1);
	}

	// Check hash.
	for (let [ key, value ] of hash.entries()) {
		console.log(key, value);
	}

	// Iterate through magazine until counter is equal to ransomNote.length.
	let counter = 0;

	for (let i = 0; i < magazine.length; i++) {
		// If the char appeared in the ransom note at least once not undefined.
		if (hash.get(magazine[i])) {
			hash.set(magazine[i], hash.get(magazine[i]) - 1); // Decrement.
			counter++;
		}

		if (counter === ransomNote.length) return true;
	}

	return false;
};
