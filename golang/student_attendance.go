func checkRecord(s string) bool {
	absences, lates := 0, 0

	for _, record := range s {
		if record == 'A' {
			absences++
			lates = 0
		} else if record == 'L' {
			lates++
		} else {
			lates = 0
		}

		if lates >= 3 || absences >= 2 {
			return false
		}
	}

	return true
}