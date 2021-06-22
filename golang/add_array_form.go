func addToArrayForm(num []int, k int) []int {
	carry := k
	for i := len(num) - 1; i >= 0; i-- {
		carry += num[i]
		num[i] = carry % 10
		carry /= 10
	}

	for carry > 0 {
		digit := carry % 10
		carry /= 10
		num = append([]int{digit}, num...)
	}

	return num
}