func largestSumAfterKNegations(nums []int, k int) int {
	total := 0
	for _, num := range nums {
		total += num
	}

	// idea is that you should negate all the negative values until you reach k
	// if there are no negative values you should stop if leftover k is divisible by 2
	// if not divisible by 2, then negate the next least number
	// you need to sort the nums and adjust the total accordingly
	// k is not necessarily smaller than the len of nums

	sort.Ints(nums)

	// must check len of nums bc k could be greater than len of nums
	i := 0
	last := -100
	for i < k && i < len(nums) {
		diff := k - i
		// negate value if negative, or remaining must be positive
		if nums[i] < 0 {
			total -= 2 * nums[i]
		} else if diff%2 == 1 {
			// if last negation is abs less then current, revert last negation
			if -last > nums[i] {
				total -= 2 * nums[i]
			} else {
				total += 2 * last
			}
		} else if diff%2 == 0 {
			// if even and positive, you can just invert twice, doing nothing operation
			break
		}
		last = nums[i]
		i++
	}

	return total
}