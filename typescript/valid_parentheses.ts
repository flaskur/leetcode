function isValid(s: string): boolean {
	let stack = []

	for (let char of s) {
		if (char == '(' || char == '{' || char == '[') {
			stack.push(char)
		} else if (char == ')' || char == '}' || char == ']') {
			if (stack.length == 0) return false
			let top = stack.pop()
			if (top != '(' && char == ')') return false
			if (top != '{' && char == '}') return false
			if (top != '[' && char == ']') return false
		}
	}

	return stack.length == 0
}
