func minOperations(s string) int {
	zeroPath := 0
	onePath := 0

	for i, char := range s {
		if i%2 == 0 {
			if char == '0' {
				zeroPath++
			} else if char == '1' {
				onePath++
			}
		} else if i%2 == 1 {
			if char == '1' {
				zeroPath++
			} else if char == '0' {
				onePath++
			}
		}
	}

	if zeroPath > onePath {
		return len(s) - zeroPath
	}
	return len(s) - onePath
}