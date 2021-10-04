func numIslands(grid [][]byte) int {
	islands := 0
	seen := map[string]bool{}

	for row := 0; row < len(grid); row++ {
		for col := 0; col < len(grid[0]); col++ {
			// skip if 0
			if grid[row][col] == '0' {
				continue
			}

			// seen already => skip
			if seen[fmt.Sprint(row, col)] {
				continue
			} else {
				// other we found a new island
				islands++
			}

			// perform dfs and mark all connected land
			helper(grid, seen, row, col)
		}
	}

	return islands
}

func helper(grid [][]byte, seen map[string]bool, row, col int) {
	// base case
	if row < 0 || row >= len(grid) || col < 0 || col >= len(grid[0]) {
		return
	}
	if grid[row][col] == '0' {
		return
	}
	if seen[fmt.Sprint(row, col)] {
		return
	}

	// mark visited
	seen[fmt.Sprint(row, col)] = true

	// move along every direction to search for connected land
	helper(grid, seen, row-1, col)
	helper(grid, seen, row+1, col)
	helper(grid, seen, row, col-1)
	helper(grid, seen, row, col+1)
}

// instead of a seen map, you could have directly marked the cell with 'x' or something similar