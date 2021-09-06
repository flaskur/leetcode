func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}

	// find a start point, then run two sum with remaining
	for i := 0; i < len(nums)-2; i++ {
		// impossible to have sum of 0 bc sorted
		if nums[i] > 0 {
			break
		}

		// avoid duplicates
		if i == 0 || nums[i] != nums[i-1] {
			start, end, sum := i+1, len(nums)-1, -nums[i] // need nums[start]+nums[end] = -nums[i]

			for start < end {
				if nums[start]+nums[end] == sum {
					res := []int{nums[i], nums[start], nums[end]}
					result = append(result, res)

					// skip duplicates
					for start < end && nums[start] == nums[start+1] {
						start++
					}
					for start < end && nums[end] == nums[end-1] {
						end--
					}
					start++
					end--
				} else if nums[start]+nums[end] < sum {
					start++
				} else if nums[start]+nums[end] > sum {
					end--
				}
			}
		}
	}

	return result
}