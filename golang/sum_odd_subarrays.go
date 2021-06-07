// given an array of positive integers, calculate the sum of all odd length subarrays.
func sumOddLengthSubarrays(arr []int) int {
	sum := 0
	for i := 0; i < len(arr); i++ {
		for j := i; j < len(arr); j += 2 {
			total := 0
			k := i
			for k <= j {
				total += arr[k]
				k++
			}
			sum += total
		}
	}

	return sum
}