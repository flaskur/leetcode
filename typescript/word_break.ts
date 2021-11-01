function wordBreak(s: string, wordDict: string[]): boolean {
	// create hash set for dictionary reference
	let ref = new Set<string>()
	wordDict.forEach(word => ref.add(word))

	let dp = new Array<boolean>(s.length + 1).fill(false) // +1 because we need to consider empty string
	dp[0] = true // implies that we can make an empty string without any segments

	// attempt to find segment fill for each
	for (let end = 1; end < dp.length; end++) {
		// end - 1 represents last char in actual string
		for (let start = end - 1; start >= 0; start--) {
			// start checks if [start, end) inside of dict
			let segment = s.slice(start, end)
			if (ref.has(segment) && dp[start] == true) {
				dp[end] = true
			}

			// early check
			if (dp[dp.length - 1] == true) return true
		}
	}

	return dp[dp.length - 1]
}
