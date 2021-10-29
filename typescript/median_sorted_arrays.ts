function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	// merge step then index to find median o(n)

	let nums = merge(nums1, nums2)

	if (nums.length % 2 == 0) {
		let left = Math.floor((nums.length - 1) / 2)
		let right = nums.length / 2
		return (nums[left] + nums[right]) / 2
	} else {
		let mid = Math.floor(nums.length / 2)
		return nums[mid]
	}

	// never happens
	return 0
}

function merge(nums1: number[], nums2: number[]): number[] {
	let result = []

	let one = 0
	let two = 0
	while (one < nums1.length && two < nums2.length) {
		if (nums1[one] <= nums2[two]) {
			result.push(nums1[one])
			one++
		} else {
			result.push(nums2[two])
			two++
		}
	}

	while (one < nums1.length) {
		result.push(nums1[one])
		one++
	}
	while (two < nums2.length) {
		result.push(nums2[two])
		two++
	}

	return result
}
