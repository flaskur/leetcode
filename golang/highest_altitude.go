// biker going on a trip starting at altitude 0, return the highest altitude of a point.
func largestAltitude(gain []int) int {
	maxAltitude := 0
	altitude := 0

	for _, change := range gain {
		altitude += change

		if altitude > maxAltitude {
			maxAltitude = altitude
		}
	}

	return maxAltitude
}