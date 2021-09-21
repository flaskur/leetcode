func subarraySum(nums []int, k int) int {
	// sum(i, j) = sum(0, j) - sum(0, i-1)
	// k = sum(i, j) -> sum(0, j) - k = sum(0, i-1) meaning i need to find presum before i
	// think of presum as start point and current sum as end point

	count, sum := 0, 0
	freq := map[int]int{}
	freq[0]++ // need to init zero to count presum = 0

	for i := 0; i < len(nums); i++ {
		sum += nums[i]

		// found presum, valid subarray sum
		if f, ok := freq[sum-k]; ok {
			count += f
		}

		// setup presum
		freq[sum]++
	}

	return count
}