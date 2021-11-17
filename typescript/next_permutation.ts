function nextPermutation(nums: number[]): void {
	let first = -1
	let second = -1

	// find greatest index where it increases from nums[i] to nums[i+1]
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			first = i
			break
		}
	}

	// found no increasing instance => reverse
	if (first == -1) {
		nums = nums.reverse()
		return
	}

	// find largest index that is greater than first
	for (let i = nums.length - 1; i > first; i--) {
		if (nums[i] > nums[first]) {
			second = i
			break
		}
	}

	// swap first and second
	;[ nums[first], nums[second] ] = [ nums[second], nums[first] ]

	// reverse everything after first index
	let start = first + 1
	let end = nums.length - 1
	while (start < end) {
		;[ nums[start], nums[end] ] = [ nums[end], nums[start] ]
		start++
		end--
	}
}
