func isLongPressedName(name string, typed string) bool {
	if len(name) > len(typed) {
		return false
	}

	// two pointers approach but handle end
	l, r := 0, 0
	var prev byte

	// alex aaaaaaa -> out of bounds
	for l < len(name) && r < len(typed) {
		if name[l] == typed[r] {
			prev = name[l]
			l++
			r++
		} else if typed[r] == prev {
			r++
		} else {
			return false
		}
	}

	if l != len(name) {
		return false
	}

	for j := r; j < len(typed); j++ {
		if typed[j] != prev {
			return false
		}
	}

	return true
}