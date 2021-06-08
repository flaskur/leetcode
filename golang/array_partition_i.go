// given an integer array of 2n integers, group into pairs to maximize the sum of all min pairs.
// sort automatically pairs
// func arrayPairSum(nums []int) int {
// 	sort.Ints(nums)
// 	sum := 0
// 	for i := 0; i < len(nums); i += 2 {
// 		sum += nums[i]
// 	}

// 	return sum
// }

// bucket sort
func arrayPairSum(nums []int) int {
	buckets := [20001]int{} // 20001 because given constraint
	for _, num := range nums {
		buckets[num+10000]++ // 10000 offset because nums[i] can be at most -10^4 so convert to nonnegative index
	}

	sum := 0
	odd := true

	for i := 0; i < len(buckets); i++ {
		for buckets[i] > 0 {
			if odd {
				sum += i - 10000 // undo offset to make nonnegative index
			}
			odd = !odd
			buckets[i]--
		}
	}

	return sum
}