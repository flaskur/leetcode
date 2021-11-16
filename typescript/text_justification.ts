function fullJustify(words: string[], maxWidth: number): string[] {
	let result = []
	let current = ''
	let i = 0
	while (i < words.length) {
		// empty + word is guaranteed to fit width
		if (!current.length) {
			current += words[i]
			i++
			continue
		}

		// overflows when adding space + word
		if (current.length + 1 + words[i].length > maxWidth) {
			result.push(justify(current, maxWidth))
			current = ''
			continue // repeat word[i] iteration
		}

		current += ` ${words[i]}`
		i++
	}

	if (current) {
		result.push(current.padEnd(maxWidth))
	}

	return result
}

function justify(s: string, maxWidth: number): string {
	if (!s.includes(' ')) return s.padEnd(maxWidth)

	let words = s.split(' ')
	let buffers = words.length - 1
	let spaces = maxWidth - s.length + buffers

	// add spaces from left to right repeatedly, but skip last word
	let i = 0
	while (spaces > 0) {
		words[i] += ' '
		spaces--
		i++
		if (i == words.length - 1) i = 0
	}

	return words.join('')
}
