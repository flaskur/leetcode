// given a rows x cols matrix where each element is either 0 or 1, return the number of special positions. a position is special if it is 1 and all the other elements in the row and col are 0.
func numSpecial(mat [][]int) int {
	// i need to keep track of how many 1's are in a particular row and col
	rowCount := [101]int{}
	colCount := [101]int{}

	for i, row := range mat {
		for j, num := range row {
			if num == 1 {
				rowCount[i]++
				colCount[j]++
			}
		}
	}

	specials := 0
	for i, row := range mat {
		for j, num := range row {
			if num == 1 && rowCount[i] == 1 && colCount[j] == 1 {
				specials++
			}
		}
	}

	return specials
}