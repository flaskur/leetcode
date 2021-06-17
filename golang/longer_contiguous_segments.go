// given a binary string, find if the length of the longest segment of 1's is greater than that of 0's.
func checkZeroOnes(s string) bool {
	zeroLen := 0
	oneLen := 0

	i := 0
	for i < len(s) {
		j := i
		for s[i] == s[j] {
			j++
			if j == len(s) {
				break
			}
		}

		if s[i] == '0' && j-i > zeroLen {
			zeroLen = j - i
		} else if s[i] == '1' && j-i > oneLen {
			oneLen = j - i
		}

		i = j
	}

	return oneLen > zeroLen
}