func summaryRanges(nums []int) []string {
	if len(nums) == 0 {
		return []string{}
	}

	result := []string{}
	single := true
	start := nums[0]
	for i := 0; i < len(nums)-1; i++ {
		if nums[i]+1 != nums[i+1] {
			span := strconv.Itoa(start)
			if single {
				result = append(result, span)
			} else {
				span = strconv.Itoa(start) + "->" + strconv.Itoa(nums[i])
				result = append(result, span)
			}
			start = nums[i+1]
			single = true
		} else {
			single = false
		}
	}
	span := strconv.Itoa(start)
	if single {
		result = append(result, span)
	} else {
		span = strconv.Itoa(start) + "->" + strconv.Itoa(nums[len(nums)-1])
		result = append(result, span)
	}

	return result
}