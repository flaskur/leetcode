function originalDigits(s: string): string {
	let buckets = Array(26).fill(0)
	for (let char of s) {
		let ascii = char.charCodeAt(0) - 'a'.charCodeAt(0)
		buckets[ascii]++
	}

	let out = Array(10)

	// unique chars to nums
	out[0] = buckets['z'.charCodeAt(0) - 'a'.charCodeAt(0)]
	out[2] = buckets['w'.charCodeAt(0) - 'a'.charCodeAt(0)]
	out[4] = buckets['u'.charCodeAt(0) - 'a'.charCodeAt(0)]
	out[6] = buckets['x'.charCodeAt(0) - 'a'.charCodeAt(0)]
	out[8] = buckets['g'.charCodeAt(0) - 'a'.charCodeAt(0)]

	// non unique subtract from unique
	out[3] = buckets['h'.charCodeAt(0) - 'a'.charCodeAt(0)] - out[8] // three, eight => h
	out[5] = buckets['f'.charCodeAt(0) - 'a'.charCodeAt(0)] - out[4] // five, four => f
	out[7] = buckets['s'.charCodeAt(0) - 'a'.charCodeAt(0)] - out[6] // seven, six => s
	out[9] = buckets['i'.charCodeAt(0) - 'a'.charCodeAt(0)] - out[5] - out[6] - out[8] // nine, five, six eight => i
	out[1] = buckets['n'.charCodeAt(0) - 'a'.charCodeAt(0)] - out[7] - 2 * out[9] // one, seven, nine(2) => n

	let result = ''
	for (let digit = 0; digit <= 9; digit++) {
		result += digit.toString().repeat(out[digit])
	}

	return result
}
