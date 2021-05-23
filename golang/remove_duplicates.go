// create a record hash set and populate with number occurrences. if we encounter existing number in set, remove the index by partitioning.
// func removeDuplicates(nums []int) int {
// 	record := map[int]bool{}

// 	for i := len(nums) - 1; i >= 0; i-- {
// 		if !record[nums[i]] {
// 			record[nums[i]] = true
// 		} else {
// 			nums = append(nums[:i], nums[i+1:]...)
// 		}
// 	}

// 	return len(record)
// }

// not required to actually remove values. two pointers approach, if pointer values are different overwrite i + 1 to j value.
// i is placeholder while j searches for non duplicate to replace it with
func removeDuplicates(nums []int) int {
	i := 0
	j := 1
	duplicates := 0

	for j < len(nums) {
		if nums[i] != nums[j] {
			nums[i+1] = nums[j]
			i += 1
			j += 1
		} else {
			duplicates += 1
			j += 1
		}
	}

	nums = nums[:(len(nums) - duplicates)]
	return len(nums)
}
