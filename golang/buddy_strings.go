func buddyStrings(s string, goal string) bool {
	if len(s) != len(goal) {
		return false
	}

	// check if there is a duplicate to swap
	seen := map[rune]bool{}
	for _, char := range s {
		seen[char] = true
	}
	if s == goal {
		if len(s)-len(seen) >= 1 {
			return true
		}
		return false
	}

	// check diff between strings
	diff := []int{}
	for i := range s {
		if s[i] != goal[i] {
			diff = append(diff, i)
			if len(diff) > 2 {
				return false
			}
		}
	}
	if len(diff) != 2 {
		return false
	}

	// evaluate swap
	if s[diff[0]] == goal[diff[1]] && s[diff[1]] == goal[diff[0]] {
		return true
	}
	return false
}
