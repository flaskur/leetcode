function isRobotBounded(instructions: string): boolean {
	// the condition for it to be circle bounded is after x number of instructions, it ends up at position (0, 0) facing north
	// the number of instructions could be arbitrary though, might be 4
	// we cannot just keep running instructions until it gets to position because infinite
	// need to keep track of direction and coordinates

	let direction = 0 // n0 e1 s2 w3
	let row = 0
	let col = 0

	// repeat instructions a max of 4 times before declaring infinite
	let i = 0
	while (i < 4) {
		for (let order of instructions) {
			// move in current direction
			if (order == 'G') {
				if (direction == 0) row++
				else if (direction == 1) col++
				else if (direction == 2) row--
				else if (direction == 3) col--
			} else if (order == 'R') {
				direction = (direction + 1) % 4
			} else if (order == 'L') {
				if (direction == 0) direction = 3
				else direction -= 1
			}
		}

		// check if after instruction, at origin + north => circle
		if (row == 0 && col == 0 && direction == 0) return true

		i++
	}

	// goes out of infinitely out of plane
	return false
}

// if end position is not north, implied to be circular
function isRobotBounded(instructions: string): boolean {
	let direction = 0 // n0 e1 s2 w3
	let row = 0
	let col = 0

	for (let order of instructions) {
		if (order == 'G') {
			if (direction == 0) row++
			else if (direction == 1) col++
			else if (direction == 2) row--
			else if (direction == 3) col--
		} else if (order == 'R') {
			direction = (direction + 1) % 4
		} else if (order == 'L') {
			direction = (direction + 3) % 4
		}
	}

	// end dir is north implies infinite
	// pos = 0 0 implies circular
	// dir != north implies circular
	return (row == 0 && col == 0) || direction != 0
}
