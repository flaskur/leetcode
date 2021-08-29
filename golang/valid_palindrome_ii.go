// times out
func validPalindrome(s string) bool {
	// simple way would be to write a func and pass string with each char deleted and check if any work
	// other way would be to on failure, recursively check if removing left or right work, need to check both
	if isPalindrome(s) {
		return true
	}

	// try deleting each char
	for i := 0; i < len(s); i++ {
		if isPalindrome(s[:i] + s[i+1:]) {
			return true
		}
	}

	return false
}

func isPalindrome(s string) bool {
	for i := 0; i < len(s); i++ {
		if s[i] != s[len(s)-1-i] {
			return false
		}
	}
	return true
}

// recursive
func validPalindrome(s string) bool {
	return helper(s, 0, len(s)-1, false)
}

func helper(s string, left int, right int, skipped bool) bool {
	if left >= right {
		return true
	}

	if s[left] != s[right] {
		if skipped {
			return false
		}

		return helper(s, left+1, right, true) || helper(s, left, right-1, true)
	}

	return helper(s, left+1, right-1, skipped)
}