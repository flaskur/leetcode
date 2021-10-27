function trap(height: number[]): number {
	// dp problem that finds the max height from left and right and mins to find rainwater
	// find min between left and right, then subtract from the height at that point

	// dp arrays keep track of max rainfall possible going from each side
	let left = Array(height.length)
	let right = Array(height.length)

	let leftMax = height[0]
	let rightMax = height[height.length - 1]
	left[0] = leftMax
	right[height.length - 1] = rightMax

	// populate dp arrays with max or current
	for (let i = 1; i < height.length; i++) {
		leftMax = Math.max(leftMax, height[i])
		left[i] = leftMax
	}
	for (let i = height.length - 1; i >= 0; i--) {
		rightMax = Math.max(rightMax, height[i])
		right[i] = rightMax
	}

	// calculate taking min rain - height
	let water = 0
	for (let i = 0; i < height.length; i++) {
		water += Math.min(left[i], right[i]) - height[i]
	}

	return water
}
