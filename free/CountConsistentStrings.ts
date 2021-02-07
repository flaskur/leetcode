// basically you check each word character to see if it's in the allowed string, but use a hash set instead of pairwise matching each character.
function countConsistentStrings(allowed: string, words: string[]): number {
	let consistent = 0;

	let chars = new Set<string>();
	for (let char of allowed) {
		if (!chars.has(char)) {
			chars.add(char);
		}
	}
	// console.log(chars);

	for (let word of words) {
		for (let i = 0; i < word.length; i++) {
			if (!chars.has(word[i])) {
				break;
			}

			if (i === word.length - 1) {
				consistent += 1;
			}
		}
	}

	return consistent;
}
