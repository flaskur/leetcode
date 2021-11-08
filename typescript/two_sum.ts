function twoSum(nums: number[], target: number): number[] {
	let index = new Map<number, number>()

	for (let i = 0; i < nums.length; i++) {
		let search = target - nums[i]
		if (index.has(search)) return [ index.get(search), i ]
		index.set(nums[i], i)
	}

	return [] // never happens
}
