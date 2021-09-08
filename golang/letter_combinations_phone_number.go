func letterCombinations(digits string) []string {
	// edge case
	if len(digits) < 1 {
		return []string{}
	}

	// map reference from digit to letter set
	ref := map[byte]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}
	result := []string{}

	helper(digits, 0, "", ref, &result)

	return result
}

func helper(digits string, index int, current string, ref map[byte]string, result *[]string) {
	if len(current) == len(digits) {
		*result = append(*result, current)
		return
	}

	for _, letter := range ref[digits[index]] {
		helper(digits, index+1, current+string(letter), ref, result)
	}
}