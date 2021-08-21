func rotateString(s string, goal string) bool {
	if s == goal {
		return true
	}

	x := []rune(s)
	for i := 0; i < len(x)-1; i++ {
		x = append(x[1:], x[0])
		if string(x) == goal {
			return true
		}
	}

	return false
}