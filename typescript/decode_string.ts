function decodeString(s: string): string {
	let stack: string[] = []
	let count = 0

	for (let char of s) {
		let d = parseInt(char) // defaults radix 10
		if (Number.isInteger(d)) {
			count = 10 * count + d
		} else if (char == '[') {
			stack.push(count.toString())
			count = 0
		} else if (char == ']') {
			// assume that chars are combined
			let word = stack.pop()
			let rep = parseInt(stack.pop()) // guaranteed to be number
			let top = word.repeat(rep)

			// combine all letters at top
			while (stack.length > 0 && stack[stack.length - 1].match(/[a-z]/)) {
				top = stack.pop() + top
			}
			stack.push(top)
		} else {
			// check top to either push new or combine
			let last = stack[stack.length - 1]
			let d = parseInt(last)
			if (Number.isInteger(d)) {
				// push char if top is number
				stack.push(char)
			} else {
				if (stack.length == 0) stack.push(char)
				else {
					// combine if top is letter
					last = last + char
					stack[stack.length - 1] = last
				}
			}
		}
	}

	return stack.join('')
}
