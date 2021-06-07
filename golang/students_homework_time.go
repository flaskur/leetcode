// given start and end time for students, return the number of students that were working during queryTime inclusive.
func busyStudent(startTime []int, endTime []int, queryTime int) int {
	busy := 0

	for i := 0; i < len(startTime); i++ {
		if startTime[i] <= queryTime && endTime[i] >= queryTime {
			busy++
		}
	}

	return busy
}