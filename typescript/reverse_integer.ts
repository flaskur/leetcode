function reverse(x: number): number {
	let isNegative = x < 0
	let arr = Math.abs(x).toString().split('')
	let rev = arr.reverse().join('')
	let num = parseInt(rev)

	if (isNegative && num > Math.pow(2, 31)) return 0
	if (!isNegative && num > Math.pow(2, 31) - 1) return 0

	return isNegative ? -num : num
}

// without type conversion
function reverse(x: number): number {
	let isNegative = x < 0
	let num = 0

	x = Math.abs(x)
	while (x > 0) {
		// num shifts left and takes last digit of num => reversing
		num = 10 * num + x % 10
		x = ~~(x / 10) // flooring
	}

	// check bound
	if (isNegative && num > Math.pow(2, 31)) return 0
	if (!isNegative && num > Math.pow(2, 31) - 1) return 0

	return isNegative ? -num : num
}
