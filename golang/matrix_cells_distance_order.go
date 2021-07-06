func allCellsDistOrder(rows int, cols int, rCenter int, cCenter int) [][]int {
	// index represents manhattan distance, each index holds position as a string
	buckets := [201][]string{}

	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			distance := manhattanDistance(r, c, rCenter, cCenter)

			// convert to string to combine row/col position
			position := strconv.Itoa(r) + " " + strconv.Itoa(c)

			// add the position to the distance index array
			buckets[distance] = append(buckets[distance], position)
		}
	}

	result := [][]int{}
	for i := 0; i < len(buckets); i++ {
		// go through each distance in order from small to large
		if len(buckets[i]) != 0 {
			for _, pos := range buckets[i] {
				splitPos := strings.Split(pos, " ")

				// convert position back to int
				row, _ := strconv.Atoi(splitPos[0])
				col, _ := strconv.Atoi(splitPos[1])

				// add indices to result array
				indices := []int{}
				indices = append(indices, []int{row, col}...)

				result = append(result, indices)
			}
		}
	}

	return result
}

func manhattanDistance(r1, c1, r2, c2 int) int {
	return abs(r1-r2) + abs(c1-c2)
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}
