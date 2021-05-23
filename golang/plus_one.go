package main

// given a non empty array of digits, increment 1 to the integer and return as an array.
// need to keep track of carry and add from end to beginning. also push to front of the array
func plusOne(digits []int) []int {
	result := []int{}
	carry := 1

	for i := len(digits) - 1; i >= 0; i-- {
		sum := digits[i] + carry

		if sum == 10 {
			result = append([]int{0}, result...)
			carry = 1
		} else {
			result = append([]int{sum}, result...)
			carry = 0
		}
	}

	if carry == 1 {
		result = append([]int{1}, result...)
	}

	return result
}
