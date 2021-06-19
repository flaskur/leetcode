func findPoisonedDuration(timeSeries []int, duration int) int {
	seconds := 0

	for i, time := range timeSeries {
		if i == len(timeSeries)-1 {
			seconds += duration
			break
		}

		interval := timeSeries[i+1] - time
		if interval < duration {
			seconds += interval
		} else {
			seconds += duration
		}
	}

	return seconds
}