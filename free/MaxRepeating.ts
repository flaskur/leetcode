// The idea is that word will be repeated k times and must match a portion of the sequence. The question is how many times does it repeat for max?
// Something like a while iteration that moves the index by the word length until it fails.
// Might be a timing error since I do some unnecessary operations.
function maxRepeating(sequence: string, word: string): number {
	let repeats = 0;

	// you need to check at every possible start character
	for (let i = 0; i < sequence.length; i++) {
		let count = 0;

		let j = i;
		while (sequence.slice(j, j + word.length) === word) {
			count += 1;
			repeats = Math.max(repeats, count);
			j += word.length;
		}
	}

	return repeats;
}
