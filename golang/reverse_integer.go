import (
	"math"
)

// given a 32 bit integer, return it with the digits reversed, if overflow error, return 0
func reverse(x int) int {
	result := 0

	for x != 0 {
		result = (result * 10) + (x % 10)
		if result > math.MaxInt32 || result < math.MinInt32 {
			return 0
		}
		x /= 10
	}

	return result
}
