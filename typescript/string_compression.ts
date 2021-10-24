function compress(chars: string[]): number {
	let place = 0
	let runner = 1

	let char = chars[0]
	let count = 1

	// make changes when you encounter a number that is not repeated
	while (runner < chars.length) {
		// found non repeat
		if (chars[runner] != char) {
			// write compressed
			chars[place] = char
			place++

			if (count > 1) {
				place = helper(chars, count, place) // update place after mutating
			}

			// update with new char
			char = chars[runner]
			count = 1
		} else {
			// repeat char increment count
			count++
		}

		runner++
	}

	// have to consider last char
	chars[place] = char
	place++

	if (count > 1) {
		place = helper(chars, count, place)
	}

	// truncate unused arr space
	return chars.slice(0, place).length
}

function helper(chars: string[], count: number, place: number): number {
	// write each digit char reverse order
	let digits = []
	while (count != 0) {
		let digit = count % 10
		count = Math.floor(count / 10)
		digits.unshift(digit) // add to front queue
	}

	digits.forEach(digit => {
		chars[place] = digit.toString()
		place++
	})

	return place
}
