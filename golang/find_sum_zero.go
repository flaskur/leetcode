// given an integer n, return any array containing n unique integers that sum to 0.
func sumZero(n int) []int {
	result := []int{}

	if n%2 == 1 {
		result = append(result, 0)
	}

	for i := 0; i < n/2; i++ {
		result = append(result, i+1, -(i + 1))
	}

	return result
}