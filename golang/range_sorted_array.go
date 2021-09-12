func searchRange(nums []int, target int) []int {
	low, high := 0, len(nums)-1
	start, end := -1, -1
	for low <= high {
		mid := (low + high) / 2
		if nums[mid] == target {
			start = mid
			end = mid
			// move outwards to find start/end
			for start > 0 && nums[start-1] == target {
				start--
			}
			for end < len(nums)-1 && nums[end+1] == target {
				end++
			}
			return []int{start, end}
		} else if nums[mid] < target {
			low = mid + 1
		} else if nums[mid] > target {
			high = mid - 1
		}
	}
	return []int{-1, -1}
}

func searchRange(nums []int, target int) []int {
	result := make([]int, 2)
	result[0] = findStart(nums, target)
	result[1] = findEnd(nums, target)
	return result
}

func findStart(nums []int, target int) int {
	index, low, high := -1, 0, len(nums)-1
	for low <= high {
		mid := (low + high) / 2
		if nums[mid] == target {
			index = mid // still need to search left
			high = mid - 1
		} else if nums[mid] < target {
			low = mid + 1
		} else if nums[mid] > target {
			high = mid - 1
		}
	}
	return index
}

func findEnd(nums []int, target int) int {
	index, low, high := -1, 0, len(nums)-1
	for low <= high {
		mid := (low + high) / 2
		if nums[mid] == target {
			index = mid // still need to search right
			low = mid + 1
		} else if nums[mid] < target {
			low = mid + 1
		} else if nums[mid] > target {
			high = mid - 1
		}
	}
	return index
}