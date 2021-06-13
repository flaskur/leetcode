// given a 2d grid of size m x n, shift the grid k times.
func shiftGrid(grid [][]int, k int) [][]int {
	shiftGrid := make([][]int, len(grid))
	for i := range shiftGrid {
		shiftGrid[i] = make([]int, len(grid[i]))
	}

	for z := 0; z < k; z++ {
		for i := 0; i < len(grid); i++ {
			for j := 0; j < len(grid[i]); j++ {
				if i == len(grid)-1 && j == len(grid[i])-1 {
					shiftGrid[0][0] = grid[i][j]
				} else if j == len(grid[i])-1 {
					shiftGrid[i+1][0] = grid[i][j]
				} else {
					shiftGrid[i][j+1] = grid[i][j]
				}
			}
		}

		// copy 2d array
		for i := range grid {
			copy(grid[i], shiftGrid[i])
		}
	}

	return grid
}