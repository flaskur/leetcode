// basic convert to string using join and do a boolean comparison of the string literals
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
	return word1.join('') === word2.join('');
}
