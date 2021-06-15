// given an array of integers 0 and 1 and integer k, return true is all 1's are at least k places away from each other.
func kLengthApart(nums []int, k int) bool {
	indices := []int{}
	for i, num := range nums {
		if num == 1 {
			indices = append(indices, i)
		}
	}

	if len(indices) < 2 {
		return true
	}

	for i := 0; i < len(indices)-1; i++ {
		if indices[i+1]-indices[i]-1 < k {
			return false
		}
	}

	return true
}