function topKFrequent(words: string[], k: number): string[] {
	// fill frequency map for each word
	let freq = new Map<string, number>()
	words.forEach(word => {
		freq.has(word) ? freq.set(word, freq.get(word) + 1) : freq.set(word, 1)
	})

	let buckets = Array(500)
	for (let i = 0; i < buckets.length; i++) {
		buckets[i] = []
	}

	for (let [ word, count ] of freq.entries()) {
		buckets[count].push(word)
	}

	let result = []
	for (let i = buckets.length - 1; i > 0; i--) {
		if (buckets[i].length > 0) {
			buckets[i].sort((a, b) => compare(a, b))
		}

		while (k > 0 && buckets[i].length > 0) {
			result.push(buckets[i].shift())
			k--
		}

		if (k == 0) return result
	}

	return result
}

function compare(a: string, b: string): number {
	if (a < b) return -1
	if (a == b) return 0
	if (a > b) return 1
}
