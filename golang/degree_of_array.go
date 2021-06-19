func findShortestSubArray(nums []int) int {
	m := map[int][]int{}
	for i := 0; i < len(nums); i++ {
		if _, ok := m[nums[i]]; !ok {
			m[nums[i]] = []int{1, i, i} // degree/start/end
		} else {
			m[nums[i]][0]++   // update degree
			m[nums[i]][2] = i // update end
		}
	}

	degree, minLen := math.MinInt32, math.MaxInt32
	for _, value := range m {
		if value[0] > degree {
			degree = value[0]
			minLen = value[2] - value[1] + 1
		} else if value[0] == degree {
			minLen = min(minLen, value[2]-value[1]+1)
		}
	}

	return minLen
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}