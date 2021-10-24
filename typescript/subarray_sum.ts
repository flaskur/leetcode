function subarraySum(nums: number[], k: number): number {
	// need to find cases where sum(i, j) = k but sum(i, j) = sum(0, j) - sum(0, i)
	// store prefix sums sum(0, i) in hash set, check if runningSum - k inside prefix sums

	// needs to be a freq map to count duplicate sums
	let prefixSums = new Map<number, number>()
	prefixSums.set(0, 1) // init 0 bc num by itself is valid

	let runningSum = 0
	let count = 0
	for (let i = 0; i < nums.length; i++) {
		runningSum += nums[i]

		// subarray sum is valid
		if (prefixSums.has(runningSum - k)) {
			count += prefixSums.get(runningSum - k)
		}

		prefixSums.set(runningSum, prefixSums.has(runningSum) ? prefixSums.get(runningSum) + 1 : 1)
	}

	return count
}
