function searchInsert(nums: number[], target: number): number {
	let start = 0
	let end = nums.length - 1

	while (start <= end) {
		let mid = ~~((start + end) / 2)
		if (nums[mid] == target) return mid
		else if (nums[mid] < target) start = mid + 1
		else if (nums[mid] > target) end = mid - 1
	}

	// start and end become [mid(end), mid+1(start)] or [mid-1(end), mid(start)]
	// start makes sense because we don't want previous index, only current mid or mid+1
	return start
}
