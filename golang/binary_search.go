func search(nums []int, target int) int {
	start, end := 0, len(nums)-1

	for start <= end {
		middle := (start + end) / 2
		if nums[middle] == target {
			return middle
		} else if nums[middle] < target {
			start = middle + 1
		} else if nums[middle] > target {
			end = middle - 1
		}
	}

	return -1
}