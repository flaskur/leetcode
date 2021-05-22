package main

// given an integer array, return true if any value appears at least twice, false otherwise.
// create a hash set to check for duplicates.
func containsDuplicate(nums []int) bool {
	set := map[int]bool{}

	for _, num := range nums {
		if set[num] {
			return true
		}
		set[num] = true
	}

	return false
}
