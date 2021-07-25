func freqAlphabets(s string) string {
	result := []rune{}
	for i := 0; i < len(s); i++ {
		if i >= len(s)-2 || s[i+2] != '#' {
			if num, err := strconv.Atoi(string(s[i])); err == nil {
				num = num - 1 + int('a')
				char := rune(num)
				result = append(result, char)
			}
		} else if s[i+2] == '#' {
			if num, err := strconv.Atoi(s[i : i+2]); err == nil {
				num = num - 1 + int('a')
				char := rune(num)
				result = append(result, char)

				// skip past #
				i += 2
				continue
			}
		}
	}
	return string(result)
}