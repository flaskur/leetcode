func searchInsert(nums []int, target int) int {
	// binary search
	start := 0
	end := len(nums) - 1
	mid := (start + end) / 2
	for start <= end {
		mid = (start + end) / 2
		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			end = mid - 1
		} else if nums[mid] < target {
			start = mid + 1
		}
	}

	// not found, check sorted order
	for i, num := range nums {
		if num > target {
			return i
		}
	}
	return len(nums)
}