func islandPerimeter(grid [][]int) int {
	perimeter := 0
	for row := range grid {
		for col, value := range grid[row] {
			if value == 1 {
				// row check
				if row == 0 {
					perimeter++
				} else if grid[row-1][col] == 0 {
					perimeter++
				}
				if row == len(grid)-1 {
					perimeter++
				} else if grid[row+1][col] == 0 {
					perimeter++
				}

				// column check
				if col == 0 {
					perimeter++
				} else if grid[row][col-1] == 0 {
					perimeter++
				}
				if col == len(grid[row])-1 {
					perimeter++
				} else if grid[row][col+1] == 0 {
					perimeter++
				}
			}
		}
	}

	return perimeter
}