// I would create a hash set for all the lowercase vowels, then for each half, iterate and count the vowels. You can terminate earlier if the second half # vowels exceeds the first half.
// Hash set allows vowel lookup at constant time instead of checking if vowel using array that holds them all.
function halvesAreAlike(s: string): boolean {
	let leftVowelCount = 0;
	let rightVowelCount = 0;

	// create the vowel hash set
	const vowels = new Set<string>();
	vowels.add('a');
	vowels.add('e');
	vowels.add('i');
	vowels.add('o');
	vowels.add('u');

	// count first half
	for (let i = 0; i < s.length / 2; i++) {
		if (vowels.has(s[i].toLowerCase())) {
			leftVowelCount += 1;
		}
	}

	for (let j = s.length / 2; j < s.length; j++) {
		if (vowels.has(s[j].toLowerCase())) {
			rightVowelCount += 1;
		}

		// early termination on failure
		if (rightVowelCount > leftVowelCount) return false;
	}

	return leftVowelCount === rightVowelCount;
}
