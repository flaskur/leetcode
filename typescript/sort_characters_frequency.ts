function frequencySort(s: string): string {
	const MAXFREQ = 500001

	// populate frequency map for each character
	let freq = new Map<string, number>()
	for (let char of s) {
		!freq.has(char) ? freq.set(char, 1) : freq.set(char, freq.get(char) + 1)
	}

	// use bucket index to represent frequency
	let buckets: string[][] = Array(MAXFREQ)
	for (let i = 0; i < buckets.length; i++) {
		buckets[i] = []
	}

	for (let [ char, count ] of freq.entries()) {
		buckets[count].push(char)
	}

	// build result by iterating through all non empty buckets
	let result = ''
	let i = MAXFREQ - 1
	while (i > 0) {
		// skip if empty chars for this freq
		if (buckets[i].length == 0) {
			i--
			continue
		}

		let char = buckets[i].pop()
		result += char.repeat(i)
	}

	return result
}
