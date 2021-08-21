func gcdOfStrings(str1 string, str2 string) string {
	if len(str1) == len(str2) {
		if str1 == str2 {
			return str1
		}
		return ""
	}

	if len(str1) > len(str2) {
		if str1[:len(str2)] == str2 {
			return gcdOfStrings(str1[len(str2):], str2)
		}
		return ""
	}

	if str2[:len(str1)] == str1 {
		return gcdOfStrings(str2[len(str1):], str1)
	}

	return ""
}

// you can find gcd of two numbers by recursively finding subtraction of large - small until both nums are the same