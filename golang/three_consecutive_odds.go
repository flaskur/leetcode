// given an array of integers, return true if there are three consecutive odd numbers in the array.
func threeConsecutiveOdds(arr []int) bool {
	if len(arr) < 3 {
		return false
	}

	i := 0
	for i < len(arr)-2 {
		if isOdd(arr[i]) && isOdd(arr[i+1]) && isOdd(arr[i+2]) {
			return true
		}

		// skipping pointer if end is even, because cannot be consecutive
		if !isOdd(arr[i+2]) {
			i += 3
			continue
		}
		if !isOdd(arr[i+1]) {
			i += 2
			continue
		}
		i++
	}

	return false
}

func isOdd(num int) bool {
	return num%2 == 1
}