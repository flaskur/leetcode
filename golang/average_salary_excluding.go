// given an array of unique integer, return the average salary excluding the min and max salary.
func average(salary []int) float64 {
	total, min, max := 0, math.MaxInt32, math.MinInt32

	for _, sal := range salary {
		total += sal
		if sal < min {
			min = sal
		}
		if sal > max {
			max = sal
		}
	}

	return float64(total-min-max) / float64(len(salary)-2)
}