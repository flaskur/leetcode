function lengthOfLongestSubstring(s: string): number {
	let longest = 0
	let start = 0
	let end = 0

	const indexRef = new Map<string, number>()
	indexRef.set(s[end], 0)

	while (end < s.length) {
		end++

		// found repeating character
		if (indexRef.has(s[end])) {
			longest = Math.max(longest, end - start)

			// delete chars from start to char index inclusive
			let bound = indexRef.get(s[end])
			while (start <= bound) {
				indexRef.delete(s[start])
				start++
			}
		}

		// update window
		indexRef.set(s[end], end)
	}

	// possible that there are never repeats
	longest = Math.max(longest, end - start)

	return longest
}
