/**
 * Given a string S, removal the vowels and return a new string.
 * @param {string} S The input string.
 * @return {string} A new string that does not contain vowels.
 */
// Trivial solution that iterates through the string and checks against a list of vowels. The complexity is at worst O(n^2) which is pretty bad. A better method would be to use a regex pattern.
const removeVowels = function(S) {
	let newString = '';
	// An empty string '' means split by character.
	let vowels = 'aeiou'.split('');

	// Just iterate through each character and check if it is a vowel or not.
	for (character of S) {
		if (!vowels.includes(character)) newString += character;
	}

	return newString;
};

// Better solution using regex.
const removeVowels = function(S) {
	let regexPattern = /[^aeiou]/g;
	return S.match(regexPattern).join('');
};
