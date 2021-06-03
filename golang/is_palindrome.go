// given a string, determine if it is a palindrome considering only alphanum and ignoring case.
// use a regex expression to remove all non alphanums, then lowercase all chars. use two pointers while loop to check that chars at both ends match.
func isPalindrome(s string) bool {
	s = cleanString(s)

	i := 0
	j := len(s) - 1
	for i < j {
		if s[i] != s[j] {
			return false
		}
		i += 1
		j -= 1
	}

	return true
}

func cleanString(s string) string {
	// regex to remove non alphanums
	re := regexp.MustCompile(`[^a-zA-Z\d]`)
	s = re.ReplaceAllString(s, "")

	// set to all lowercase
	s = strings.ToLower(s)

	return s
}
