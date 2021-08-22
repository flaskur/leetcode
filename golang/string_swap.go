func areAlmostEqual(s1 string, s2 string) bool {
	// single swap implies the diff between s1 s2 must be 2 chars or 0 chars
	if s1 == s2 {
		return true
	}
	if len(s1) != len(s2) {
		return false
	}

	indices := []int{}
	for i := 0; i < len(s1); i++ {
		if s1[i] != s2[i] {
			indices = append(indices, i)
		}
		if len(indices) > 2 {
			return false
		}
	}

	if len(indices) != 2 {
		return false
	}

	x := []rune(s2)
	x[indices[0]], x[indices[1]] = x[indices[1]], x[indices[0]]

	return s1 == string(x)
}