// two pass --> count nums and overwrite
func sortColors(nums []int) {
	zeros, ones, twos := 0, 0, 0
	for _, num := range nums {
		switch num {
		case 0:
			zeros++
		case 1:
			ones++
		case 2:
			twos++
		}
	}

	i := 0
	for zeros > 0 {
		nums[i] = 0
		zeros--
		i++
	}
	for ones > 0 {
		nums[i] = 1
		ones--
		i++
	}
	for twos > 0 {
		nums[i] = 2
		twos--
		i++
	}
}

// one pass --> triple pointers
func sortColors(nums []int) {
	low, current, high := 0, 0, len(nums)-1

	for current <= high {
		if nums[current] == 0 {
			nums[low], nums[current] = nums[current], nums[low]
			low++
			current++
		} else if nums[current] == 2 {
			nums[high], nums[current] = nums[current], nums[high]
			high--
			// don't increment current because we haven't checked swapped piece
		} else {
			current++
		}
	}
}