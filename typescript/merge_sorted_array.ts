function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	// go in reverse order to avoid overwriting values
	let runner = nums1.length - 1
	let one = nums1.length - 1 - nums2.length
	let two = nums2.length - 1

	// basically merge step
	while (one >= 0 && two >= 0) {
		if (nums1[one] >= nums2[two]) {
			nums1[runner] = nums1[one]
			runner--
			one--
		} else {
			nums1[runner] = nums2[two]
			runner--
			two--
		}
	}

	// if one is leftover, it should already be sorted => skip
	while (two >= 0) {
		nums1[runner] = nums2[two]
		runner--
		two--
	}
}
