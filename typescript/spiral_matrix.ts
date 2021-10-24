enum Direction {
	E = 0,
	S = 1,
	W = 2,
	N = 3,
}

function spiralOrder(matrix: number[][]): number[] {
	let direction = Direction.E
	let row = 0
	let col = 0
	let order = []
	let n = matrix.length * matrix[0].length

	// could also check if matrix[row][col] == -101
	while (order.length != n) {
		order.push(matrix[row][col])
		matrix[row][col] = -101 // mark cell as already used

		// move in clockwise direction if at index bound or already seen cell
		if (direction == Direction.E && (col == matrix[0].length - 1 || matrix[row][col + 1] == -101)) {
			direction = Direction.S
		} else if (direction == Direction.S && (row == matrix.length - 1 || matrix[row + 1][col] == -101)) {
			direction = Direction.W
		} else if (direction == Direction.W && (col == 0 || matrix[row][col - 1] == -101)) {
			direction = Direction.N
		} else if (direction == Direction.N && (row == 0 || matrix[row - 1][col] == -101)) {
			direction = Direction.E
		}

		// traverse normal case
		switch (direction) {
			case Direction.E: {
				col++
				break
			}
			case Direction.S: {
				row++
				break
			}
			case Direction.W: {
				col--
				break
			}
			case Direction.N: {
				row--
				break
			}
		}
	}

	return order
}
