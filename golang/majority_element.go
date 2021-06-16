// given an array of nums, return the majority element.
func majorityElement(nums []int) int {
	freq := map[int]int{}
	for _, num := range nums {
		freq[num]++
	}

	for num, count := range freq {
		if count > len(nums)/2 {
			return num
		}
	}

	return -1
}

func majorityElement(nums []int) int {
	major := nums[0]
	count := 1

	for i := 1; i < len(nums); i++ {
		if count == 0 {
			major = nums[i]
			count = 1
		} else if nums[i] == major {
			count++
		} else {
			count--
		}
	}

	return major
}