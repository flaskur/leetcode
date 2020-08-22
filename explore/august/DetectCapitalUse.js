/**
 * Given a word, judge whether the capitals are used correctly or not.
 * Correct if all letters are capitals, all letters are not capital, or only the first letter is capital.
 * Seems like you just isolate all three cases and check if a || condition.
 * 
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
	if (isAllCaps(word)) {
		console.log('success 1');
		return true;
	}
	if (isAllLower(word)) {
		console.log('success 2');
		return true;
	}
	if (isCapital(word)) {
		console.log('success 3');
		return true;
	}

	return false;
};

const isAllCaps = (word) => {
	for (let char of word) {
		if (char === char.toLowerCase()) return false;
	}

	return true;
};

const isAllLower = (word) => {
	for (let char of word) {
		if (char === char.toUpperCase()) return false;
	}

	return true;
};

const isCapital = (word) => {
	if (word[0] === word[0].toLowerCase()) return false;

	for (let i = 1; i < word.length; i++) {
		if (word[i] === word[i].toUpperCase()) return false;
	}

	return true;
};
