function search(nums: number[], target: number): number {
	// perform binary search twice, once to find offset, again to find target index

	// find offset movement to the right to be sorted
	let start = 0
	let end = nums.length - 1
	// search is based on end, not target => finds smallest value
	while (start < end) {
		let mid = Math.floor((start + end) / 2)

		if (nums[mid] > nums[end]) {
			start = mid + 1
		} else {
			end = mid
		}
	}
	let offset = start

	// normal binary search with offset
	start = 0
	end = nums.length - 1
	while (start <= end) {
		let mid = Math.floor((start + end) / 2)

		if (nums[(mid + offset) % nums.length] == target) return (mid + offset) % nums.length
		else if (nums[(mid + offset) % nums.length] < target) start = mid + 1
		else if (nums[(mid + offset) % nums.length] > target) end = mid - 1
	}

	// failed to find target
	return -1
}
