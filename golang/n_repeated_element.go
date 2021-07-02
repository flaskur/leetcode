func repeatedNTimes(nums []int) int {
	freq := map[int]int{}
	for _, num := range nums {
		freq[num]++
	}
	for element, count := range freq {
		if count == len(nums)/2 {
			return element
		}
	}

	return 0 // never happens
}

// since there are n+1 unique elements, the repeated element must be the only one that is non distinct, so use a hash set
func repeatedNTimes(nums []int) int {
	seen := map[int]bool{}
	for _, num := range nums {
		if _, ok := seen[num]; ok {
			return num
		}
		seen[num] = true
	}
	return 0 // never happens
}