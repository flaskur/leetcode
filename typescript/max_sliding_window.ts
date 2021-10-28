function maxSlidingWindow(nums: number[], k: number): number[] {
	// edge case
	if (nums.length == 0 || k == 0) return []
	if (k == 1) return nums

	let result = []
	let deque = [] // hold indices

	for (let i = 0; i < nums.length; i++) {
		// remove elements outside of window from beginning
		while (deque.length != 0 && deque[0] < i - k + 1) {
			deque.shift()
		}

		// remove elements that are smaller than current candidate
		while (deque.length != 0 && nums[deque[deque.length - 1]] < nums[i]) {
			deque.pop()
		}

		// add candidate index to back => everything in front is guaranteed to be >=
		deque.push(i)

		// given window size means that we already know number of elements in result array
		// this prevents pushing to result before window size is established
		if (i >= k - 1) {
			result.push(nums[deque[0]])
		}
	}

	return result
}
