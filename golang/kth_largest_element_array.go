func findKthLargest(nums []int, k int) int {
	// sort the array in nlogn time and then access by len-k index
	nums = mergeSort(nums)
	return nums[len(nums)-k]
}

func mergeSort(nums []int) []int {
	// base case
	if len(nums) == 1 {
		return nums
	}

	// merge sort will continue to split in half until there is only 1 element, then it will join back together to form in sorted order
	mid := len(nums) / 2 // mid => start of right half
	left := mergeSort(nums[:mid])
	right := mergeSort(nums[mid:])
	return helper(left, right)
}

func helper(x, y []int) []int {
	// combine two already sorted arrays into a bigger sorted array
	result := make([]int, len(x)+len(y))

	// choose smallest between arrays until one is empty
	i, j := 0, 0
	for i < len(x) && j < len(y) {
		if x[i] <= y[j] {
			result[i+j] = x[i]
			i++
		} else {
			result[i+j] = y[j]
			j++
		}
	}

	// fill in for remaining non traversed array
	for i < len(x) {
		result[i+j] = x[i]
		i++
	}
	for j < len(y) {
		result[i+j] = y[j]
		j++
	}

	return result
}