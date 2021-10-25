function numIslands(grid: string[][]): number {
	// keep island count and perform dfs to mark all 1's that are adjacent
	let islands = 0

	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			let cell = grid[row][col]

			// skip if not island start
			if (cell == '0') continue

			// perform dfs to mark entire island and increment count
			if (cell == '1') {
				helper(grid, row, col)
				islands++
			}
		}
	}

	return islands
}

function helper(grid: string[][], row: number, col: number) {
	// base case
	if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] == '0') return

	// mark visited
	grid[row][col] = '0'

	// traverse in every cardinal direction
	helper(grid, row - 1, col)
	helper(grid, row + 1, col)
	helper(grid, row, col - 1)
	helper(grid, row, col + 1)
}
