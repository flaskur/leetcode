func backspaceCompare(s string, t string) bool {
	stackS := []rune{}
	stackT := []rune{}

	for _, char := range s {
		if char == '#' && len(stackS) != 0 {
			stackS = stackS[:len(stackS)-1]
		} else if char != '#' {
			stackS = append(stackS, char)
		}
	}
	for _, char := range t {
		if char == '#' && len(stackT) != 0 {
			stackT = stackT[:len(stackT)-1]
		} else if char != '#' {
			stackT = append(stackT, char)
		}
	}

	return string(stackS) == string(stackT)
}

// O(1) space working backwards
func backspaceCompare(s string, t string) bool {
	skip := 0
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '#' {
			s = s[:i] + s[i+1:]
			skip++
		} else if skip > 0 {
			s = s[:i] + s[i+1:]
			skip--
		}
	}

	skip = 0
	for i := len(t) - 1; i >= 0; i-- {
		if t[i] == '#' {
			t = t[:i] + t[i+1:]
			skip++
		} else if skip > 0 {
			t = t[:i] + t[i+1:]
			skip--
		}
	}

	return s == t
}