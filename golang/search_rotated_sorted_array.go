func search(nums []int, target int) int {
	// perform binary search twice, once to find offset --> index of min num, once to find target using offset
	low, high := 0, len(nums)-1
	for low < high {
		mid := (low + high) / 2

		// smallest num is right side
		if nums[mid] > nums[high] {
			low = mid + 1
		} else {
			high = mid
		}
	}
	offset := low

	low = 0
	high = len(nums) - 1
	for low <= high {
		mid := (low + high) / 2 // mid+offset%len is actual mid
		if nums[(mid+offset)%len(nums)] == target {
			return (mid + offset) % len(nums)
		} else if nums[(mid+offset)%len(nums)] < target {
			low = mid + 1
		} else if nums[(mid+offset)%len(nums)] > target {
			high = mid - 1
		}
	}

	return -1
}