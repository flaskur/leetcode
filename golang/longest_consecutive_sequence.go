// trivial with sort
func longestConsecutive(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	sort.Ints(nums)
	max, count := 0, 1
	for i := 0; i < len(nums)-1; i++ {
		if nums[i] == nums[i+1] {
			continue
		} else if nums[i] == nums[i+1]-1 {
			count++
		} else {
			if count > max {
				max = count
			}
			count = 1
		}
	}
	if count > max {
		max = count
	}

	return max
}

// memo bad time
func longestConsecutive(nums []int) int {
	vals := map[int]bool{}
	for _, num := range nums {
		vals[num] = true
	}

	max, count := 0, 0
	memo := map[int]int{}
	for _, num := range nums {
		i := num
		for vals[i] {
			if freq, ok := memo[i]; ok {
				count += freq
				break
			}
			count++
			i++
		}
		if count > max {
			max = count
		}

		memo[num] = count
		count = 0
	}

	return max
}

func longestConsecutive(nums []int) int {
	streak := 0
	vals := map[int]bool{}
	for _, num := range nums {
		vals[num] = true
	}

	for _, num := range nums {
		// only check if start of streak
		if !vals[num-1] {
			val := num + 1
			for vals[val] {
				val++
			}

			if val-num > streak {
				streak = val - num
			}
		}
	}

	return streak
}