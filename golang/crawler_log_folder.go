func minOperations(logs []string) int {
	level := 0
	for _, log := range logs {
		if log == "../" {
			if level > 0 {
				level--
			}
		} else if log == "./" {

		} else {
			level++
		}
	}

	return level
}