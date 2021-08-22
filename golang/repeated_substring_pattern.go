func repeatedSubstringPattern(s string) bool {
	for i := 0; i < len(s)/2; i++ {
		sub := s[:i+1]
		if isPattern(sub, s, i+1) {
			return true
		}
	}
	return false
}

func isPattern(sub string, s string, i int) bool {
	for i < len(s) {
		// find bound for next pattern to match
		bound := len(s)
		if i+len(sub) < len(s) {
			bound = i + len(sub)
		}
		comp := s[i:bound]
		if sub != comp {
			return false
		}

		// keep checking until end of string matches
		i += len(sub)
	}
	return true
}