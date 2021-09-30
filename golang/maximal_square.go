func maximalSquare(matrix [][]byte) int {
	// convert matrix to int values to make processing easier
	area := 0
	mat := make([][]int, len(matrix))
	for col := range mat {
		mat[col] = make([]int, len(matrix[0]))
	}
	for row := 0; row < len(mat); row++ {
		for col := 0; col < len(mat[0]); col++ {
			d, _ := strconv.Atoi(string(matrix[row][col]))
			mat[row][col] = d

			if d > area {
				area = d
			}
		}
	}

	for row := 1; row < len(mat); row++ {
		for col := 1; col < len(mat[0]); col++ {
			// 0 means it cannot be part of square
			if mat[row][col] == 0 {
				continue
			}

			// check if top left corner adjecent cells are valid => hence form a square
			corner, top, left := mat[row-1][col-1], mat[row-1][col], mat[row][col-1]
			if corner > 0 && top > 0 && left > 0 {
				// had to guess and check to figure out min+1
				val := min(corner, top, left) + 1

				// update area
				if val*val > area {
					area = val * val
				}
				mat[row][col] = val
			}
		}
	}

	return area
}

func min(x, y, z int) int {
	if x <= y && x <= z {
		return x
	} else if y <= x && y <= z {
		return y
	}
	return z
}