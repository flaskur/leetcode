func getRow(rowIndex int) []int {
	row := []int{1}

	if rowIndex == 0 {
		return row
	}

	for i := 1; i <= rowIndex; i++ {
		r := make([]int, i+1)
		r[0], r[len(r)-1] = 1, 1
		for j := 1; j < len(r)-1; j++ {
			r[j] = row[j-1] + row[j]
		}
		row = r
	}

	return row
}