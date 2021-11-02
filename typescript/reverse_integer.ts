function reverse(x: number): number {
	let isNegative = x < 0
	let arr = Math.abs(x).toString().split('')
	let rev = arr.reverse().join('')
	let num = parseInt(rev)

	if (isNegative && num > Math.pow(2, 31)) return 0
	if (!isNegative && num > Math.pow(2, 31) - 1) return 0

	return isNegative ? -num : num
}
