func floodFill(image [][]int, sr int, sc int, newColor int) [][]int {
	// edge case
	if image[sr][sc] == newColor {
		return image
	}

	// pass pointer to image to modify
	helper(&image, sr, sc, image[sr][sc], newColor)

	return image
}

func helper(image *[][]int, row int, col int, prevColor int, newColor int) {
	// base case, invalid index, already visited, or not matching previous color
	if row < 0 || row >= len(*image) || col < 0 || col >= len((*image)[0]) || (*image)[row][col] != prevColor {
		return
	}

	// set new color for cell
	(*image)[row][col] = newColor

	// recursively fill each direction until failure
	helper(image, row-1, col, prevColor, newColor)
	helper(image, row+1, col, prevColor, newColor)
	helper(image, row, col-1, prevColor, newColor)
	helper(image, row, col+1, prevColor, newColor)
}