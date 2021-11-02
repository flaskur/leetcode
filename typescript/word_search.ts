function exist(board: string[][], word: string): boolean {
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[0].length; col++) {
			if (board[row][col] == word[0] && helper(board, word, word[0], row, col)) return true
		}
	}
	return false
}

function helper(board: string[][], word: string, current: string, row: number, col: number): boolean {
	// base case
	if (current.length >= word.length) {
		if (current == word) return true
		return false
	}

	// mark visited
	let save = board[row][col]
	board[row][col] = '.'

	// up
	if (row > 0 && board[row - 1][col] != '.' && helper(board, word, current + board[row - 1][col], row - 1, col))
		return true
	// down
	if (
		row < board.length - 1 &&
		board[row + 1][col] != '.' &&
		helper(board, word, current + board[row + 1][col], row + 1, col)
	)
		return true
	// left
	if (col > 0 && board[row][col - 1] != '.' && helper(board, word, current + board[row][col - 1], row, col - 1))
		return true
	// right
	if (
		col < board[0].length - 1 &&
		board[row][col + 1] != '.' &&
		helper(board, word, current + board[row][col + 1], row, col + 1)
	)
		return true

	// unvisit
	board[row][col] = save

	return false
}
