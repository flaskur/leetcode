func maxArea(height []int) int {
	maxArea := 0
	start, end := 0, len(height)-1
	for start < end {
		edge := min(height[start], height[end])
		area := edge * (end - start)
		if area > maxArea {
			maxArea = area
		}

		// if heights are the same, both start++ and end-- solutions will be smaller
		if height[start] < height[end] {
			start++
		} else {
			end--
		}
	}
	return maxArea
}

func min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}