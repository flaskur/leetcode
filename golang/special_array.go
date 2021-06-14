// given an array of non negative integers, the array is special if there is a number x where there are exactly x numbers greater than or equal to x.
func specialArray(nums []int) int {
	freq := map[int]int{}
	for _, num := range nums {
		freq[num]++
	}

	for i := 1; i <= len(nums); i++ {
		greater := 0
		for num, count := range freq {
			if num >= i {
				greater += count
			}
		}

		if i == greater {
			return i
		}
	}

	return -1
}