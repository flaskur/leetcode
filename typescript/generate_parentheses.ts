function generateParenthesis(n: number): string[] {
	let combos = []
	helper('(', n, 1, 0, combos)
	return combos
}

function helper(current: string, n: number, left: number, right: number, combos: string[]) {
	// base case
	if (current.length == 2 * n) {
		combos.push(current) // assuming current is valid
		return
	}

	if (left == n) {
		helper(current + ')', n, left, right + 1, combos)
		return
	}

	if (left == right) {
		helper(current + '(', n, left + 1, right, combos)
		return
	}

	if (left > right) {
		helper(current + '(', n, left + 1, right, combos)
		helper(current + ')', n, left, right + 1, combos)
		return
	}
}
