// given a matrix grid sorted in non increasing order both row and column wise, return the number of negative numbers in the grid.
// func countNegatives(grid [][]int) int {
// 	count := 0

// 	for i := len(grid) - 1; i >= 0; i-- {
// 		for j := len(grid[0]) - 1; j >= 0; j-- {
// 			if grid[i][j] < 0 {
// 				count++
// 			} else {
// 				break
// 			}
// 		}
// 	}

// 	return count
// }

// start at bottom left corner and trace the boundary between pos/neg
func countNegatives(grid [][]int) int {
	count := 0

	row := len(grid) - 1
	col := 0

	for row >= 0 && col < len(grid[0]) {
		if grid[row][col] < 0 {
			// rest of the row is negative
			count += len(grid[0]) - col
			row--
		} else {
			col++
		}
	}

	return count
}