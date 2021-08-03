func removeDuplicates(s string) string {
	x := []byte(s)

	repeat := true
	for repeat == true {
		repeat = false
		for i := 0; i < len(x)-1; i++ {
			// found duplicate, remove, then repeat index
			if x[i] == x[i+1] {
				x = append(x[:i], x[i+2:]...)
				repeat = true

				// repeat index
				i--
				continue
			}
		}
	}

	return string(x)
}

func removeDuplicates(s string) string {
	stack := []byte{}

	for i := 0; i < len(s); i++ {
		char := s[i]

		// if top of stack is not the same char, add to top
		if len(stack) == 0 || stack[len(stack)-1] != char {
			stack = append(stack, char)
		} else {
			// found duplicate, remove top
			stack = stack[:len(stack)-1]
		}
	}

	return string(stack)
}