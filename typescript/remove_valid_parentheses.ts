function minRemoveToMakeValid(s: string): string {
	// from left to right
	let left = 0
	let right = 0
	let i = 0
	while (i < s.length) {
		// breaks rule => remove and repeat iteration
		if (s[i] == ')' && left == right) {
			s = s.slice(0, i) + s.slice(i + 1)
			continue // do not move index
		}

		if (s[i] == '(') left++
		if (s[i] == ')') right++
		i++
	}
	console.log(s)

	// from right to left
	left = 0
	right = 0
	let j = s.length - 1
	while (j >= 0) {
		// breaks rule
		if (s[j] == '(' && left == right) {
			s = s.slice(0, j) + s.slice(j + 1)
			j-- // removal right to left means move index
			continue
		}

		if (s[j] == ')') right++
		if (s[j] == '(') left++
		j--
	}

	return s
}
