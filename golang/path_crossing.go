func isPathCrossing(path string) bool {
	seen := map[string]bool{
		"00": true,
	}
	x, y := 0, 0
	for _, direction := range path {
		switch direction {
		case 'N':
			y++
		case 'S':
			y--
		case 'E':
			x++
		case 'W':
			x--
		}

		coordinate := fmt.Sprintf("%v%v", x, y)
		if _, ok := seen[coordinate]; ok {
			return true
		}
		seen[coordinate] = true
	}
	return false
}