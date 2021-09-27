func findDuplicate(nums []int) int {
	slow, fast := 0, 0

	// keep going until slow and fast are inside of loop cycle
	// duplicate number must be at entry point of cycle
	for true {
		slow, fast = nums[slow], nums[nums[fast]]
		if slow == fast {
			break
		}
	}

	// find entry point by moving 1 at a time
	// guaranteed to meet due to the way the nums are setup
	finder := 0
	for finder != slow {
		slow, finder = nums[slow], nums[finder]
	}

	return finder
}