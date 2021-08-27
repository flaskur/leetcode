func isValid(s string) bool {
	stack := []rune{}
	for _, char := range s {
		if len(stack) == 0 {
			stack = append(stack, char)
		} else {
			if (stack[len(stack)-1] == '(' && char == ')') || (stack[len(stack)-1] == '{' && char == '}') || (stack[len(stack)-1] == '[' && char == ']') {
				stack = stack[:len(stack)-1]
			} else {
				stack = append(stack, char)
			}
		}
	}
	return len(stack) == 0
}