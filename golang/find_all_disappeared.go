func findDisappearedNumbers(nums []int) []int {
	dis := []int{}
	buckets := [100001]int{}
	for _, num := range nums {
		buckets[num]++
	}
	for i := 1; i <= len(nums); i++ {
		if buckets[i] == 0 {
			dis = append(dis, i)
		}
	}
	return dis
}

// negate seen elements where index represents seen value
func findDisappearedNumbers(nums []int) []int {
	dis := []int{}

	// mark negative based on value
	for _, num := range nums {
		index := abs(num) - 1
		nums[index] = -1 * abs(nums[index])
	}

	// find all positive nums, add index + offset
	for i, num := range nums {
		if num > 0 {
			dis = append(dis, i+1)
		}
	}

	return dis
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}