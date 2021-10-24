function threeSum(nums: number[]): number[][] {
	nums.sort((x, y) => x - y)

	const result = []

	for (let i = 0; i < nums.length - 2; i++) {
		// since sorted, it is impossible to sum 0 if pivot >= 0
		if (nums[i] > 0) {
			continue
		}

		// avoid duplicate pivot
		if (i == 0 || (i != 0 && nums[i] != nums[i - 1])) {
			let start = i + 1
			let end = nums.length - 1
			let target = -nums[i]

			// perform two sum with start and end
			while (start < end) {
				let sum = nums[start] + nums[end]
				if (sum == target) {
					result.push([ nums[i], nums[start], nums[end] ])

					start++
					while (nums[start] == nums[start - 1]) {
						start++
					}
					end--
					while (nums[end] == nums[end + 1]) {
						end--
					}
				} else if (sum < target) {
					start++
					while (nums[start] == nums[start - 1]) {
						start++
					}
				} else if (sum > target) {
					end--
					while (nums[end] == nums[end + 1]) {
						end--
					}
				}
			}
		}
	}

	return result
}
