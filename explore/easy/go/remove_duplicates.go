package main

import "fmt"

// Given a sorted array of nums, remove the duplicates in place, so that each element appears only once, then return length.
// Do not allocate extra space, only do this in place O(1) memory.
func removeDuplicates(nums []int) int {
	length := len(nums)

	for i := 0; i < len(nums)-1; i++ {
		// if we find a duplicate at i + 1, redo the iteration
		if nums[i] == nums[i+1] {
			fmt.Println("executes")
			nums = append(nums[:i+1], nums[i+2:]...)
			i--
			length--
		}
	}

	return length
}
