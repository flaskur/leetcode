enum Direction {
	N,
	S,
	E,
	W,
}

function candyCrush(board: number[][]): number[][] {
	// previously I attempted to perform dfs on each cell and mark each cell, only reverting if count failed
	// it's not dfs it's strictly in one direction to find count >= 3, but it must be done simulateneously which means that i cannot mark sequentially, i need to save all row/col and mark afterwards

	let stable = false
	let mark = new Set<number[]>() // stores row/col combination that need to be emptied to 0
	while (!stable) {
		for (let row = 0; row < board.length; row++) {
			for (let col = 0; col < board[0].length; col++) {
				if (board[row][col] != 0) {
					// you must go in every direction consistently
					// will populate mark with all cells that need to be emptied
					crush(board, row, col, 0, board[row][col], Direction.N, [ [ row, col ] ], mark)
					crush(board, row, col, 0, board[row][col], Direction.S, [ [ row, col ] ], mark)
					crush(board, row, col, 0, board[row][col], Direction.E, [ [ row, col ] ], mark)
					crush(board, row, col, 0, board[row][col], Direction.W, [ [ row, col ] ], mark)
				}
			}
		}

		// becomes stable if there are no values in mark
		if (mark.size == 0) {
			stable = true
		} else {
			// mark all cells simultaneously
			mark.forEach(([ row, col ]) => {
				board[row][col] = 0
			})
			mark.clear()

			// only perform gravity if unstable => made a change
			gravity(board)
		}
	}

	return board
}

function crush(
	board: number[][],
	row: number,
	col: number,
	count: number,
	value: number,
	direction: Direction,
	history: number[][],
	mark: Set<number[]>,
) {
	// this should keep going in the given direction until it fails and return the count
	// if the count is >= 3 you need to add all the row/col to mark set, but you need to keep history for that to work and do it at the last recursion

	// base case
	if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] != value) {
		// add history to mark if count is greater than 3
		if (count >= 3) {
			history.forEach(coord => {
				mark.add(coord)
			})
		}
		return
	}

	// only add to history if valid case
	history.push([ row, col ])

	// must pass new ref of history for each path
	if (direction == Direction.N) {
		crush(board, row - 1, col, count + 1, value, direction, [ ...history ], mark)
	} else if (direction == Direction.S) {
		crush(board, row + 1, col, count + 1, value, direction, [ ...history ], mark)
	} else if (direction == Direction.E) {
		crush(board, row, col + 1, count + 1, value, direction, [ ...history ], mark)
	} else if (direction == Direction.W) {
		crush(board, row, col - 1, count + 1, value, direction, [ ...history ], mark)
	}
}

function gravity(board: number[][]) {
	// moves zeroes to top of each column using pointer approach
	for (let col = 0; col < board[0].length; col++) {
		// set nonzero in place index increment
		let place = board.length - 1
		for (let row = board.length - 1; row >= 0; row--) {
			if (board[row][col] != 0) {
				board[place][col] = board[row][col]
				place--
			}
		}

		// fill end(top) with 0's
		while (place >= 0) {
			board[place][col] = 0
			place--
		}
	}
}
