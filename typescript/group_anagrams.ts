function groupAnagrams(strs: string[]): string[][] {
	let ref = new Map<string, string[]>()

	strs.forEach(str => {
		// setup buckets for char freq
		let buckets = Array(26).fill(0)
		for (let char of str) {
			let ascii = char.charCodeAt(0) - 'a'.charCodeAt(0)
			buckets[ascii]++
		}

		// build a key using char freq
		let key = ''
		for (let i = 0; i < 26; i++) {
			key += `${buckets[i]}#` // add delimiter
		}

		// add to anagram group
		ref.set(key, [ str, ...(ref.get(key) ?? [])]) // if undefined, only [str]
	})

	let anagrams = []
	for (let group of ref.values()) {
		anagrams.push(group)
	}

	return anagrams
}