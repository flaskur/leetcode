// given input string as an array of chars, return the reversed string. no extra space done in place.
func reverseString(s []byte) {
	i := 0
	j := len(s) - 1

	for i < j {
		s[i], s[j] = s[j], s[i]
		i += 1
		j -= 1
	}
}
