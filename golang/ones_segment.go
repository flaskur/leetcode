func checkOnesSegment(s string) bool {
	segments := 0
	for i := 0; i < len(s)-1; i++ {
		if s[i] == '1' && s[i+1] == '0' {
			segments++
		}
		if segments >= 2 {
			return false
		}
	}
	if s[len(s)-1] == '1' {
		segments++
	}
	if segments >= 2 {
		return false
	}
	return true
}