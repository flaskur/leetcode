function longestCommonPrefix(strs: string[]): string {
	// find smallest string
	let smallest = strs[0]
	strs.forEach(str => {
		if (str.length < smallest.length) smallest = str
	})

	// build prefix
	let prefix = ''
	for (let i = 0; i < smallest.length; i++) {
		// all strings must qualify to build => any failure -> break
		let success = true
		for (let str of strs) {
			if (str[i] != smallest[i]) {
				success = false
				break
			}
		}

		if (success) prefix += smallest[i]
		else break // found failure => end
	}

	return prefix
}
